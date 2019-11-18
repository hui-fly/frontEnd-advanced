## vue路由声明周期
### 完整的导航解析流程
1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

如果想要在页面初始化时候或者页面刷新时调用**beforeEach**，beforeEach应该写在 new Vue({...})之前。
beforeEach是全局的，这个全局下的路由只要发生变化，都要首先执行beforeEach，但是如果跳转到全局之外的页面，例如从你的项目跳转到 http://www.baidu.com，那么它就不会被调用