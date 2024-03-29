<?php

/*
 * This file is part of davwheat/virtual-authors.
 *
 * Copyright (c) 2021 David Wheatley.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Davwheat\VirtualAuthors;

use Davwheat\VirtualAuthors\Api\Serializer\VirtualAuthorSerializer;
use Davwheat\VirtualAuthors\Filter\VirtualAuthorFilterer;
use Davwheat\VirtualAuthors\Search\VirtualAuthorDiscussionFilterGambit;
use Davwheat\VirtualAuthors\Search\VirtualAuthorDisplayNameFilter;
use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Filter\DiscussionFilterer;
use Flarum\Discussion\Search\DiscussionSearcher;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum/forum.less')
        ->css(__DIR__ . '/less/common.less')
        ->route('/author/{slug}', 'virtualAuthors.author', Content\AuthorPage::class)
        ->route('/authors', 'virtualAuthors.list', Content\AuthorsList::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less')
        ->css(__DIR__ . '/less/common.less'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Policy())
        ->globalPolicy(Access\GlobalPolicy::class),

    (new Extend\Routes('api'))
        ->get('/virtualAuthors', 'virtualAuthors.index', Api\Controller\ListVirtualAuthorsController::class)
        ->get('/virtualAuthors/{id}', 'virtualAuthors.show', Api\Controller\ShowVirtualAuthorController::class)
        ->post('/virtualAuthors', 'virtualAuthors.create', Api\Controller\CreateVirtualAuthorController::class)
        ->patch('/virtualAuthors/{id}', 'virtualAuthors.update', Api\Controller\UpdateVirtualAuthorController::class)
        ->delete('/virtualAuthors/{id}', 'virtualAuthors.delete', Api\Controller\DeleteVirtualAuthorController::class),

    (new Extend\ApiSerializer(\Flarum\Api\Serializer\ForumSerializer::class))
        ->attributes(ForumAttributes::class),

    (new Extend\Model(Discussion::class))
        ->relationship('virtualAuthors', function (AbstractModel $model) {
            return $model->belongsToMany(VirtualAuthor::class, 'discussion_virtual_author', 'discussion_id', 'virtual_author_id')
                ->withPivot(['credit'])->withTimestamps()->withCount('discussions');
        }),

    (new Extend\ApiSerializer(\Flarum\Api\Serializer\DiscussionSerializer::class))
        ->hasMany('virtualAuthors', VirtualAuthorSerializer::class)
        ->attribute('canSetVirtualAuthors', function (\Flarum\Api\Serializer\DiscussionSerializer $serializer, Discussion $discussion, array $attributes) {
            return $serializer->getActor()->can('setVirtualAuthors', $discussion);
        }),

    (new Extend\ApiController(\Flarum\Api\Controller\ShowDiscussionController::class))
        ->addInclude('virtualAuthors')
        ->load('virtualAuthors'),

    (new Extend\ApiController(\Flarum\Api\Controller\ListDiscussionsController::class))
        ->addInclude('virtualAuthors')
        ->load('virtualAuthors'),

    (new Extend\ApiController(\Flarum\Api\Controller\CreateDiscussionController::class))
        ->addInclude('virtualAuthors')
        ->load('virtualAuthors'),

    (new Extend\ApiController(\Flarum\Api\Controller\UpdateDiscussionController::class))
        ->addInclude('virtualAuthors')
        ->load('virtualAuthors'),

    (new Extend\ApiController(\Flarum\Api\Controller\ListPostsController::class))
        ->load('discussion.virtualAuthors'),

    (new Extend\Event())
        ->listen(\Flarum\Discussion\Event\Saving::class, Listener\DiscussionSavingListener::class),

    (new Extend\Filter(DiscussionFilterer::class))
        ->addFilter(VirtualAuthorDiscussionFilterGambit::class),

    (new Extend\SimpleFlarumSearch(DiscussionSearcher::class))
        ->addGambit(VirtualAuthorDiscussionFilterGambit::class),

    (new Extend\Filter(VirtualAuthorFilterer::class))
        ->addFilter(VirtualAuthorDisplayNameFilter::class),

    (new Extend\Settings())
        ->serializeToForum('davwheat-virtual-authors.link-to-virtual-authors-from-discussion', 'davwheat-virtual-authors.link-to-virtual-authors-from-discussion', 'boolval', true)
        ->serializeToForum('davwheat-virtual-authors.authors-in-sidebar', 'davwheat-virtual-authors.authors-in-sidebar', 'boolval', false)
        ->serializeToForum('davwheat-virtual-authors.discussion-badge', 'davwheat-virtual-authors.discussion-badge', 'boolval', false),
];
