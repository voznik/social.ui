import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/components/Profile';
import ProfileItems from '@/components/ProfileItems';
import ProfileCollections from '@/components/ProfileCollections';
import ProfilePeople from '@/components/ProfilePeople';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/u/:profileId',
      name: 'profile',
      component: Profile,
      props: true,
      children: [
        {
          path: 'i',
          name: 'profile/items',
          component: ProfileItems,
        },
        {
          path: 'c',
          name: 'profile/collections',
          component: ProfileCollections,
        },
        {
          path: 'e',
          name: 'profile/following',
          component: ProfilePeople,
        },
        {
          path: 'r',
          name: 'profile/followers',
          component: ProfilePeople,
        },
      ],
    },
  ],
});
