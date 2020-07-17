module.exports = app => {
  return class IndexController extends app.Controller {
    async server() {
      const { ctx } = this;
      console.log('*************************')
      // render 实现是服务端渲染 vue 组件
      await ctx.render('index/index.js', { message: 'egg vue server side render' });
    }

    async client() {
      const { ctx } = this;
      // renderClient 前端渲染，Node层只做 layout.html和资源依赖组装，渲染交给前端渲染。与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
      await ctx.renderClient('index/index.js', { message: 'egg vue client side render' });
    }

    async login() {
      const { ctx } = this;
      // renderClient 前端渲染，Node层只做 layout.html和资源依赖组装，渲染交给前端渲染。与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
      await ctx.renderClient('view/login/index.js', { message: 'egg vue client side render' });
    }
  };
};