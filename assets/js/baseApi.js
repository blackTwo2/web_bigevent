// 注意: 每次调用 $get() 或 $.post() 或 $ajax() 的时候
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Aiax提供的配置对象
$.ajaxPrefilter(function (options) {
  console.log(options.url);
  options.url = "http://localhost:3001" + options.url;
});
