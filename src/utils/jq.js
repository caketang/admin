import $ from 'jquery';
import './init'

let a = {
	autoAjax: function (type, url, json, obj, head) {
		obj = obj || {};
		head = head || {};
		obj.p = obj.p || function () {
		}; //Public 公共的
		obj.ok = obj.ok || function () {
		};
		if (sessionStorage.token && sessionStorage.userName) {
			head['Authorization'] = sessionStorage.token;
		}
		// console.log(url)
		let ajax = {
			type: type || 'post',
			url: /^https|^\/\//.test(url) ? url : URL.api + url,
			data: json !== '' && !!head["Content-Type"] && head["Content-Type"] === "application/json" ? JSON.stringify(json) : json,
			success: function (res, code, xhr) {
				let t = xhr.getResponseHeader('Content-Type');
				if (!/^application\/json/.test(t)) {
					obj.p();
					return console.log(url + ' -> not json');
				}
				if (typeof res === 'string') return console.log(res);
				obj.p();
				res.state <= 200 ? obj.ok(res) : console.log(res.message);
			},
			error: function (res) {
				let t = res.getResponseHeader('Content-Type');
				obj.p();
				if (!/^application\/json/.test(t)) return console.log(url + ' -> not json');
				res = res || {};
				switch (res.status) {
					case 400:
						global.VUE.$message.error(res.responseJSON.msg);
						break;
					case 401:
						global.VUE.$message.error(LANG['登录失效，请登录后重试'] || '登录失效，请登录后重试');
						window.clearInterval(window.TIME1);    // indexEcharts.vue this.init定时器
						window.clearInterval(window.msgTimer); // messageNotification.vue 请求出入款消息定时器
						setTimeout(() => {
							global.VUE.$router.push('/login');
						}, 500);
						return res;
						break;
					case 403:
						window.clearInterval(window.TIME1);    // indexEcharts.vue this.init定时器
						window.clearInterval(window.msgTimer); // messageNotification.vue 请求出入款消息定时器
						global.VUE.$message.error(LANG['非法登录，请登录后重试！'] || '非法登录，请登录后重试！');
						setTimeout(() => {
							global.VUE.$router.push('/login');
						}, 500);
						break;
					case 404:
						global.VUE.$router.push({path: 'errorPage', query: {code: status, url: nowUrl}});
						break;
					case 405:
						global.VUE.$message.error(LANG['权限不足！'] || '权限不足！');
						res.data = {
							data: [],
							state: 405
						}
						break;
					case 500:
						global.VUE.$router.push({path: 'errorPage', query: {code: status, url: nowUrl}});
						break;
				}
				!!obj.error ? obj.error(res) : console.log(res.status);
			},
		};
		ajax.beforeSend = function (xhr) {
			for (let i in head) xhr.setRequestHeader(i, head[i]);
		};
		return this.ajax(ajax);
	}
};
$.extend(a);
export default $;
