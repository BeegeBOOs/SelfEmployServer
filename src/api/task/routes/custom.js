module.exports = {
  routes: [
    {
      method: "GET",
      path: "/tasks/:slug ",
      handler: "task.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
