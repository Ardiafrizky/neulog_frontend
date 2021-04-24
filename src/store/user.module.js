import UserService from '../services/user.service';

export const user = {
  namespaced: true,
  actions: {
    getResidenById({ commit }, id) {
      return UserService.getResidenById(id).then(
        datas => {
          return Promise.resolve(datas);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },

    getPenggunaByResidenId({ commit }, id) {
      return UserService.getPenggunaByResidenId(id).then(
        datas => {
          return Promise.resolve(datas);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {}
};
