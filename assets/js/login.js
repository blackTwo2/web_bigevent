$(function () {
  // 去注册
  $("#link_reg").on("click", () => {
    $(".login-box").hide();
    $(".reg-box").show();
  });

  // 去登录
  $("#link_login").on("click", () => {
    $(".reg-box").hide();
    $(".login-box").show();
  });

  // 从layui获取from
  var form = layui.form;
  // 从layui获取layer
  let layer = layui.layer;
  //   自定义验证规则
  form.verify({
    pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    //判断两次密码是否一致
    repwd: function (value) {
      let pwd1 = $("#form-reg [name=password]").val();
      if (value != pwd1) {
        console.log(pwd1);
        console.log(value);
        return "两次密码不一致";
      }
    },
  });

  // 监听注册表单的提交事件
  $("#form-reg").on("submit", (e) => {
    e.preventDefault();
    $.post(
      "/api/reguser",
      {
        username: $("#form-reg [name=username]").val(),
        password: $("#form-reg [name=password]").val(),
      },
      function (res) {
        if (res.status != 0) {
          return layer.msg(res.msg);
        }
        layer.msg(res.msg);
        $("#link_login").click();
      }
    );
  });

  // 监听登录表单的提交事件
  $("#form-login").submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: "/api/login",
      method: "POST",
      //jQuery快速获取from表单内容
      data: $(this).serialize(),
      success: function (res) {
        if (res.status != 0) {
          return layer.msg("登陆失败");
        }
        layer.msg("登陆成功");
        location.href = "index.html";
      },
    });
  });
});
