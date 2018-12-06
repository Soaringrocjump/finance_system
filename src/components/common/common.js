
export default {
    isNull: function (v) {
        return (v == undefined || v == null || v == "undefined" || v === "null" || v === "" || (typeof v == "number" && "NaN" === (v + "")));
    },
    isEmpty: function (v) {
        return kt.isNull(v) || (kt.isArray(v) && v.length == 0);
    },
    isString: function (v) {
        return !kt.isNull(v) && typeof (v) === "string";
    },
    isNumber: function (v) {
        return !kt.isNull(v) && !isNaN(+v) && typeof (+v) === "number";
    },
    isObject: function (v) {
        return !kt.isNull(v) && typeof v === "object" && v.length === undefined;
    },
    isArray: function (v) {
        return !kt.isNull(v) && typeof v === "object" && v.length >= 0 && !kt.isJqueryObject(v);
    },
    setLoginUser: function (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
    },
    getLoginUser: function () {
        var user = sessionStorage.getItem('user');
        if(this.isNull(user) ){
            alert("错误：获取登陆用户失败");
            return null;
        }
        return JSON.parse(user);
    },
    getValue:function (dates,departmentid) {
      let departmentname="";
      for(let i=0; i<dates.length;i++){
        if(departmentid==dates[i].code){
          departmentname=  dates[i].name;
        }
      }
      return departmentname;
    }
}
