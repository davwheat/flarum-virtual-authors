<?php

namespace Davwheat\VirtualAuthors\Command;

use Davwheat\VirtualAuthors\VirtualAuthor;
use Davwheat\VirtualAuthors\Event\CreatingVirtualAuthor;
use Davwheat\VirtualAuthors\VirtualAuthorRepository;
use Davwheat\VirtualAuthors\VirtualAuthorValidator;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CreateVirtualAuthorHandler
{
    /**
     * @var VirtualAuthorRepository
     */
    protected $repository;

    /**
     * @var VirtualAuthorValidator
     */
    protected $validator;

    /**
     * @var Dispatcher
     */
    protected $events;

    public function __construct(VirtualAuthorRepository $repository, VirtualAuthorValidator $validator, Dispatcher $dispatcher)
    {
        $this->repository = $repository;
        $this->validator = $validator;
        $this->events = $dispatcher;
    }

    public function handle(CreateVirtualAuthor $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('administrateVirtualAuthors');

        $model = VirtualAuthor::build(
            Arr::get($data, 'attributes.displayName'),
            Arr::get($data, 'attributes.description'),
        );

        $this->events->dispatch(new CreatingVirtualAuthor($model, $actor, $data));

        $this->validator->assertValid($model->getAttributes());

        $model->updateTimestamps();

        $model->saveOrFail();

        return $model;
    }
}
