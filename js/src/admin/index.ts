import app from 'flarum/admin/app';

import addModel from '../common/addModel';
import SettingsPage from './pages/SettingsPage';

app.initializers.add('davwheat/manual-blog-authors', () => {
  addModel();

  app.extensionData
    .for('davwheat-virtual-authors')
    .registerSetting({
      setting: 'davwheat-virtual-authors.link-to-virtual-authors-from-discussion',
      type: 'switch',
      label: app.translator.trans('davwheat-virtual-authors.admin.settings.link_to_va_from_discussion'),
    })
    .registerSetting({
      setting: 'davwheat-virtual-authors.authors-in-sidebar',
      type: 'switch',
      label: app.translator.trans('davwheat-virtual-authors.admin.settings.authors_in_sidebar'),
      help: app.translator.trans('davwheat-virtual-authors.admin.settings.authors_in_sidebar_help'),
    })
    .registerPage(SettingsPage)
    .registerPermission(
      {
        icon: 'fas fa-ghost',
        label: app.translator.trans('davwheat-virtual-authors.admin.permissions.set_virtual_authors'),
        permission: 'discussion.setVirtualAuthors',
        tagScoped: true,
      },
      'moderate',
      94
    );
});