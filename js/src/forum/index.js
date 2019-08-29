import { extend } from 'flarum/extend';
import app from 'flarum/app';
import HeaderPrimary from 'flarum/components/HeaderPrimary';

app.initializers.add('pcnnet-decor', () => {

  extend(HeaderPrimary.prototype, 'items', function(items) {

    items.add('Old Forum', 
      <a class="pcnnet-decor-navlink" href="https://peacefulcraft.webs.com"> 
        {app.translator.trans("flarum-pcnnet-decor.forum.navigation.old-forum")} 
      </a>
    );

    items.add('Ban List', 
      <a class="pcnnet-decor-navlink" href="https://adm.peacefulcraft.net/batweb"> 
        {app.translator.trans("flarum-pcnnet-decor.forum.navigation.ban-list")} 
      </a>
    );

    items.add('Trench Stats', 
      <a class="pcnnet-decor-navlink" href="https://player.peacefulcraft.net/"> 
        {app.translator.trans("flarum-pcnnet-decor.forum.navigation.trench-stats")} 
      </a>
    );

  });

});
