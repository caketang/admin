global.FN = {
    getSession: function (k, b) {
        let v = global[b ? 'localStorage' : 'sessionStorage'].getItem(k), t = Math.floor(new Date().getTime() / 1000);
        if (!!v) {
            v = (typeof v).toLowerCase() === 'object' ? v : JSON.parse(v);
            return !!v.time && v.time <= t ? !FN.rmSession(k) && FN.rmSession(k, b) : v.value;
        }
        FN.rmSession(k, !0);
        return '';
    },
    setSession: function (k, v, b) {
        let t = (typeof v).toLowerCase() === 'object' && !!v.auth && !!v.auth.expiration ? v.auth.expiration : '',
            o = {value: v};
        !!t ? o.time = t : '';
        global[b ? 'localStorage' : 'sessionStorage'].setItem(k, JSON.stringify(o));
    },
    rmSession: function (k, b) {
        global[b ? 'localStorage' : 'sessionStorage'].removeItem(k);
    },
    clSession: function (b) {
        global[b ? 'localStorage' : 'sessionStorage'].clear();
    },
    getLgTen: function (str) {//字符串少10 补0
        return parseInt(str) < 10 && '0' + parseInt(str) || str;
    },
    formatDate: function (date, type) {
        type = type || {};
        return date.getFullYear() + type.y + global.FN.getLgTen(date.getMonth() + 1) + type.m + global.FN.getLgTen(date.getDate()) + type.d;
    },
    ex: function (n, p, b) {//true 提交数据 false 拿数据
        let o = {p: 1, b: false}, t;
        o.p = !!p && (typeof p) === 'number' ? p : o.p;
        o.b = !!p && (typeof p) != 'number' ? !!p : b;
        t = !!o.b ? n * o.p : n / o.p;
        return isNaN(t) ? 0 : t;
    },
    // 判断数组是否存在
    isRepeat: function (arr) {
        let hash = {};
        for (let i = 0; i < arr.length; i++) {
            if (hash[arr[i]]) {
                return true;
            }
            hash[arr[i]] = true;
        }
        return false;
    },
    combo: function (list, maxNum) {
        var r = [];
        (function f(t, a, n) {
            if (n == 0) return r.push(t);
            for (var i = 0, l = a.length; i <= l - n; i++) {
                f(t.concat(a[i]), a.slice(i + 1), n - 1);
            }
        })([], list, maxNum);
        return r;
    },
    factorial: function (num) {
        return num > 1 ? num * FN.factorial(--num) : 1;
    },
    mirror: function (o) {
        return /^[[{]/.test(o) ? JSON.parse(JSON.stringify(o)) : o
    },
    toObj: function (s) {
        return /^[[{]/.test(s.replace(/\s*/, '')) ? JSON.parse(s) : {}
    },
    random: function (len, r) {
        return Math.floor(Math.random() * (r || 100) % len);
    },
    saveList: function (url, arr) {
        let menu = {};
        menu[url.k] = {};
        menu[url.k][url.pid] = {};
        menu[url.k][url.pid][url.id] = arr;
        FN.setSession('menu', menu);
    },
    locTime: function (i, s) {
        if (typeof i !== 'number') return;
        let d = s ? new Date(s) : new Date();
		let len = d.getTime();
		let offset = d.getTimezoneOffset() * 60000;
		let utcTime = len + offset;
        return new Date(utcTime + 3600000 * i);
    },
    reqAnm: (function () {
        return global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame;
    })(),
    cleAnm: (function () {
        return global.cancelAnimationFrame || global.mozCancelAnimationFrame;
    })(),
    alm: {
        lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,//1900-1909
            0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,//1910-1919
            0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,//1920-1929
            0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,//1930-1939
            0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,//1940-1949
            0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,//1950-1959
            0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,//1960-1969
            0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,//1970-1979
            0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,//1980-1989
            0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,//1990-1999
            0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,//2000-2009
            0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,//2010-2019
            0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,//2020-2029
            0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,//2030-2039
            0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,//2040-2049
            0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,//2050-2059
            0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,//2060-2069
            0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,//2070-2079
            0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,//2080-2089
            0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,//2090-2099
            0x0d520],//2100
        solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Animals: ["\u9f20", "\u725b", "\u864e", "\u5154", "\u9f99", "\u86c7", "\u9a6c", "\u7f8a", "\u7334", "\u9e21", "\u72d7", "\u732a"],
        lYearDays: function (y) {
            var i, sum = 348;
            for (i = 0x8000; i > 0x8; i >>= 1) {
                sum += (FN.alm.lunarInfo[y - 1900] & i) ? 1 : 0;
            }
            return (sum + FN.alm.leapDays(y));
        },
        leapMonth: function (y) { //闰字编码 \u95f0
            return (FN.alm.lunarInfo[y - 1900] & 0xf);
        },
        leapDays: function (y) {
            if (FN.alm.leapMonth(y)) {
                return ((FN.alm.lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
            }
            return (0);
        },
        monthDays: function (y, m) {
            if (m > 12 || m < 1) {
                return -1
            }//月份参数从1至12，参数错误返回-1
            return ( (FN.alm.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29 );
        },
        getAnimal: function (y) {
            return FN.alm.Animals[(y - 4) % 12]
        },
        solar2lunar: function (y, m, d) { //参数区间1900.1.31~2100.12.31
            if (y < 1900 || y > 2100) {
                return !1;
            }//年份限定、上限
            if (y == 1900 && m == 1 && d < 31) {
                return !1;
            }//下限
            if (!y) { //未传参  获得当天
                var objDate = new Date();
            } else {
                var objDate = new Date(y, parseInt(m) - 1, d)
            }
            var i, leap = 0, temp = 0;
            //修正ymd参数
            var y = objDate.getFullYear(), m = objDate.getMonth() + 1, d = objDate.getDate();
            var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
            for (i = 1900; i < 2101 && offset > 0; i++) {
                temp = FN.alm.lYearDays(i);
                offset -= temp;
            }
            if (offset < 0) {
                offset += temp;
                i--;
            }

            //是否今天
            var isTodayObj = new Date(), isToday = false;
            if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
                isToday = true;
            }
            //农历年
            var year = i;
            return {lyear: year, animal: FN.alm.getAnimal(year)};
        }
    }
};
/**
 * Created by admin on 2017/6/20.
 */
global.ROUTES = {
	GET: {
		user: {
			cash:"/cash/withdraw/details",
			valid: "/user/valid/user.ship",
			level: {
				list: "/user/levels",
				add: "/user/level/add",
				edit: "/user/level/edit",
				layer: "/user/level/layer",
				group: "/user/level/group",
				restore: {
					$: /**
					 * 路由：/user/level/restore/?id/*
					 * @param string $1
					 * @param string ... args 可变参数
					 * @return string
					 */
					function ($1, ...args) {
						return '/' + ['user', 'level/restore', $1, ...args].join('/');
					}
				},
				set: {
					$: /**
					 * 路由：/user/level/set/?id/*
					 * @param string $1
					 * @param string ... args 可变参数
					 * @return string
					 */
					function ($1, ...args) {
						return '/' + ['user', 'level/set', $1, ...args].join('/');
					}
				},
			},
			levels: "/user/levels",
			levelsList: "/user/levels",
			login: "/user/log",
			labels: "/user/labels",
			agent: {
				$: "/user/agent",
				base: "/user/agent/base",
				market: "/user/agent/market",
				balance: "/user/agent/balance",
				reviews: "/user/agent/reviews",
				commission: "/user/agent/commission",
				valid: "/user/valid/agent.ship",
			},
			origin: "/user/register/types",
			list: "/user/list",
			register: {
				types: ".user/register/types"
			},
			games: {
				third: "/user/games/3th"
			},
			info: {
				$: /**
				 * 路由：/cash/bank/account/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['user/info', name, ...args].join('/');
				},
			},
			newInfo:'/user/info'
		},
		state: {
			summary: "/state/summary",
			player: "/state/player",
			game: "/state/game",
			active: "/state/active",
			today: "stat/today",
			member: {
				$: /**
				 * 路由：/state/member/?days\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['/state/member', name, ...args].join('/');
				}
			},
			amount: {
				$: /**
				 * 路由：/state/amount/?days\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['state/amount', name, ...args].join('/');
				}
			},
			channel: {
				$: /**
				 * 路由：/state/channel/?days\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['state/channel', name, ...args].join('/');
				}
			},
			games: {
				$: /**
				 * 路由：/state/games/?days\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['state/games', name, ...args].join('/');
				}
			},
			top10: {
				profit: "/stat/top10/profit",
				deposit: "/stat/top10/deposit",
				withdraw: "/stat/top10/withdraw"
			},
			user: "/state/user",
			money: "/state/money",
			source: "/state/source",
			ranking: "/state/ranking"
		},
		stat: {
			today: "/stat/today",
			profit: "/stat/top10/profit",
			deposit: "/stat/top10/deposit",
			withdraw: "/stat/top10/withdraw",
			member: {
				$: /**
				 * 路由：/stat/member/?days\d
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['stat', 'member', $1, ...args].join('/');
				},
			},
			amount: {
				$: /**
				 * 路由：/stat/amount/?days\d
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['stat', 'amount', $1, ...args].join('/');
				},
			},
			channel: {
				$: /**
				 * 路由：/stat/channel/?days\d
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['stat', 'channel', $1, ...args].join('/');
				},
			},
			games: {
				$: /**
				 * 路由：/state/games/?days\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['stat', 'games', $1, ...args].join('/');
				},
			},
			// top10:{
			//     $:
			//         /**
			//          * 路由：/state/games/?days\d
			//          * @param string name
			//          * @param string ... args 可变参数
			//          * @return string
			//          */
			//             function($1, ...args){return '/' + ['stat', 'top10','profit', $1, ...args].join('/');},
			// },,
		},
		system: {
			detail: '/system/website.settlement.detail',
			settlement: "/system/website.settlement",
			// global: '/system/global',
			global: '/system/settings',
			glob: '/system/glob.setting',
			htlog: '/system/htlog',
			ip: '/system/ip',
			mail: '/system/mail',
			emails: "/system/emails",
			log: {
				user: {
					operation: "/system/log/user.operation",
					type: "/system/log/user.type"
				},
				admin: {
					type: "/system/log/admin.operation"
				},
                info:"/system/log/info"
            },
			email: {
				templates: "/system/email.templates",
				template: "/system/email/template"
			},
			ipblacks: "/system/ipblacks",
			vipOrAgency: '/system/registration',
			webSet: '/system/setting',
			currency: '/system/currency',
			account: '/system/same.accounts',
			grade: '/system/sameness.account/settings',
			same: "/system/same.accounts.settings",
			service: "/system/service",
			pages: '/system/pages',
			emailSettings: '/system/email.settings',
			domain: '/system/domain',
			website: {
				style: '/system/website/style'
			},
		},
		games: {
			list: '/games/list',
			listTwo:'/games/list2',
			all: '/games/all',
			games:'/games',
		},
		unused: {
			list: '/user/unused',
		},
		unused: {
			list: '/user/unused',
		},
		//active.types.$
		actives: {
			$: "/actives",
			short: '/actives/auto/short',
			types: '/active/types',
			active: "/actives/active",
			//优惠活动
			activesList: '/actives/auto',
			manage: "/actives.manage",
			rebates: "/active/rebates",
			auto: '/actives/auto'
		},
		active: {
			types: {
				$: "/active/types",
				short: "/active/types/short"
			},
			auto: {
				short: "active/auto/short",
			},
			applys: "/active/applys",
			apply: "/active/apply",
			rebates: "/active/rebates",
			//手动优惠
			manual: {
				$: /**
				 * 路由：/state/games/?days\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['active', 'manual', $1, ...args].join('/');
				},
			},
			rebate: {
				$: "/active/rebate",
				search: {
					day: "/active/rebate/day"
				},
			}
		},
		bank: {
			$: /**
			 * 路由：/bank/?id\d
			 * @param string name
			 * @param string ... args 可变参数
			 * @return string
			 */
			function (name, ...args) {
				return '/' + ['bank', name, ...args].join('/');
			}
		},
		payment: "/payment/types",
		//资金流水
		funds: {
			flow: "/funds/flow",
			class:"/funds/flow.class",
			flows: "/funds/flows"
		},
		commission: {
			income: "/commission/income",
			agents: '/commission/agents',
			agent: {
				$: /**
				 * 路由：/bank/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['commission/agent', name, ...args].join('/');
				}
			},
			fee: "/commission/fee",
			total: "/commission/total",
			ad: "/commission/ad",
			withdrawal: "/commission/withdrawal",
			period: "/commission/period",
			commis: "/commission/commis",
			level: "/commission/level",
			links: '/commission/links'
		},
		wallet: {
			types: "/wallet/types"
		},
		//代理文案 存款文案
		copywriter: {
			proxy: "/copywriter/proxy",
			float: "/copywriter/float",
			deposit: "/copywriter/deposit",
			desc: "/copywriter/desc",
			carousel: "/copywriter/carousel",
			align:"/copywriter/float.style.align",
		},
		langeages: "/languages ",
		template: {
			//模板列表
			tempList: "/active/template",
		},
		lottery: {
			template: "/lottery/template",
			rate: "/lottery/rate",
			// fast: "/lottery/rate.fast",
			orders: "/lottery/orders",
			realtime: "/lottery/realtime",
			result: "/lottery/result",
			//获取追号列表
			chase: "/lottery/chase",
			//追号订单详情
			info: "/lottery/chase.info",
			order: {
				$: "/lottery/order",
				period: "/lottery/order.period",
				number: "/lottery/order.number"
			},
			types: {
				$: "/lottery/types",
				class:{
					$:/**
					 * 路由：/lottery/types.class?type/*
					 * @param string $1
					 * @param string ... args 可变参数
					 * @return string
					 */
					function ($1, ...args) {
						return '/' + ['lottery', 'types.class', $1, ...args].join('/');
					},
					$$:"/lottery/types.class"
				},
				play:"/lottery/types.play"
			}
		},
		order: {
			$: "/orders",
			sports: "/order/sports",
			live: "/order/live",
			esports: "/order/esports",
			fishing: "/order/fishing",
			six: "/order/six",
			lebo: "/order/lebo",
			activity: "/order/activity",
			gamelist: "/order/activity/game-name"
		},
		admin:{
			subaccount:{
				auth: '/admin/subaccount/auth'
			}
		},
		acitve:{
			amount: "/acitve/rebate.amount/",
			manual: {
				$: /**
				 * 路由：/active/manual/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['active/manual', name, ...args].join('/');
				}
			},
		},
		//优惠活动
		activity: {
			types: "/active/types",
			type: {
				$: /**
				 * 路由： /active/type/?\\d*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['active/type', $1, ...args].join('/');
				}
			},
		},
		//公告管理
		notices: {
			list: '/notices',
		},
		//货币设定
		currency: {
			list: '/currency/list'
		},
		withdraws: "/cash/withdraws",
		banks: "/banks",
		allBanks: "/bank.list",
		timezone: "/timezone",
		messages: "/messages",
		messsage: {
			num: "/message/num",
			template: {
				$: "/message/template",
				$$: {
					/**
					 * 路由：/message/template/?id\d
					 * @param string name
					 * @param string ... args 可变参数
					 * @return string
					 */
					function (name, ...args) {
						return '/' + ['message/template', name, ...args].join('/');
					}
				}
			},
			show: "/message/show"
		},
		sub: {
			accounts: {
				$: "/sub/account",
				role: "/sub/accounts.role",
				auth: '/sub/accounts.auth'
			}
		},
		cash: {
			bank: {
				acounts: "/cash/bank/accounts",
				acount: "/cash/bank/account",
			},
			records: "/cash/manual/record",
			record: {
				transfer: "/cash/record/transfer",
				balance: "/cash/record/balance",
				type: "/cash/manual/record/type"
			},
			onlines: '/cash/deposit/onlines',
			online: '/cash/deposit/online',
			offlines: '/cash/deposit/offlines',
			offline: '/cash/deposit/offline',
			withdraws: "/cash/withdraws",
			balance: "/cash/record/balance",
			trade: "/cash/trade/balance",
			payment: "/cash/payment",
			providers: '/cash/3ths/providers',
			withdraw: {
				details: {
					$: /**
					 * 路由：/cash/withdraw/details/?id\d
					 * @param string name
					 * @param string ... args 可变参数
					 * @return string
					 */
					function (name, ...args) {
						return '/' + ['cash/withdraw/details', name, ...args].join('/');
					}
				},
				audit: {
					$: /**
					 * 路由：/cash/withdraw/details/?id\d
					 * @param string name
					 * @param string ... args 可变参数
					 * @return string
					 */
					function (name, ...args) {
						return '/' + ['cash/withdraw/audit', name, ...args].join('/');
					}
				},
			},
			deposit: {
				onine: {
					$: /**
					 * 路由：/cash/deposit/onlines/?id\d
					 * @param string name
					 * @param string ... args 可变参数
					 * @return string
					 */
					function (name, ...args) {
						return '/' + ['cash/deposit/onlines', name, ...args].join('/');
					}
				},
				onlines: "/cash/deposit/onlines",
				offlines: "/cash/deposit/offlines",
				offline: {
					$: /**
					 * 路由：/cash/deposit/offline/?id\d
					 * @param string name
					 * @param string ... args 可变参数
					 * @return string
					 */
					function (name, ...args) {
						return '/' + ['cash/deposit/offline', name, ...args].join('/');
					}
				},
			},
			thirds: {
				$: '/cash/3ths',
			},
			third: {
				$: "/cash/3th",
				providers: "/cash/3th.providers"
			},
			manual: '/cash/manual'

		},
		bank: {
			$: /**
			 * 路由：/bank/?id\d
			 * @param string name
			 * @param string ... args 可变参数
			 * @return string
			 */
			function (name, ...args) {
				return '/' + ['bank', name, ...args].join('/');
			}
		},
		payment: "/payment/types",
		//资金流水
		funds: {
			flow: "/funds/flow",
			class: "/funds/flow.class",
			flows: "/funds/flows"
		},
		commission: {
			income: "/commission/income",
			agents: '/commission/agents',
			agent: {
				$: /**
				 * 路由：/bank/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['commission/agent', name, ...args].join('/');
				}
			},
			fee: "/commission/fee",
			total: "/commission/total",
			ad: "/commission/ad",
			withdrawal: "/commission/withdrawal",
			period: "/commission/period",
			commis: "/commission/commis",
			level: "/commission/level",
			links: '/commission/links'
		},
		wallet: {
			types: "/wallet/types"
		},
		langeages: "/languages ",
		state: {
			"summary": "/state/summary",
			"game": "/state/game",
			"player": "/state/player",
			active: "/state/active",
			user: {
				in: {
					out: '/state/user/in.out'
				}
			},
			rebate: '/state/valid.rebate'
		},
		//    模板优惠
		template: {
			//模板列表
			tempList: "/active/template",
		},
		lottery: {
			template: "/lottery/template",
			rate: "/lottery/rate",
			fast: "/lottery/rate.fast",
			orders: "/lottery/orders",
			realtime: "/lottery/realtime",
			result: "/lottery/result",
			//获取追号列表
			chase: "/lottery/chase",
			//追号订单详情
			info: "/lottery/chase.info",
			order: {
				$: "/lottery/order",
				period: "/lottery/order.period",
				number: "/lottery/order.number"
			},
			types: {
				$: "/lottery/types",
				class: {
					$: /**
					 * 路由：/lottery/types.class?type/*
					 * @param string $1
					 * @param string ... args 可变参数
					 * @return string
					 */
					function ($1, ...args) {
						return '/' + ['lottery', 'types.class', $1, ...args].join('/');
					},
					$$: "/lottery/types.class"
				},
				play: "/lottery/types.play"
			}
		},
		admin: {
			subaccount: {
				auth: '/admin/subaccount/auth'
			}
		}
	},
	POST: {
		state: {
			$: /**
			 * 路由：/state/?name/*
			 * @param string name
			 * @param string ... args 可变参数
			 * @return string
			 */
			function (name, ...args) {
				return '/' + ['state', name, ...args].join('/');
			}
		},
		user: {
			exchange: {
				$w: /**
				 * 路由：/user/exchange/?partner\w
				 * @param string partner 字母数字串，包括下划线
				 * @return string
				 */
				function (partner) {
					return '/' + ['user', 'exchange', partner].join('/');
				},
				setting: {
					$: /**
					 * 路由：/user/exchange/setting/?partner
					 * @param string partner
					 * @return string
					 */
					function (partner) {
						return '/' + ['user', 'exchange', 'setting', partner].join('/');
					}
				}
			},
			bind: '/user/bind',
			bank: {
				password: {
					set: '/user/bank/password/set',
					reset: '/user/bank/password/reset',
					forget: '/user/bank/password/forget'
				}
			},
			login: '/user/login',
			order: '/user/order',
			register: '/user/register',
			test: '/user/test'
		},
		wallet: {
			recharge: '/wallet/recharge',
			withdraw: '/wallet/withdraw',
			limit: '/wallet/limit'
		},
		lottery: {
			template: {
				$: /**
				 * 路由：/lottery/template/?/*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['lottery', 'template', $1, ...args].join('/');
				}
			},
			xe: '/lottery/xe',
			permission: '/lottery/permission'
		},
		system: {
			global: '/system/global',
			htlog: '/system/htlog',
			ip: '/system/ip',
			mail: '/system/mail',
			email: {
				send: "/system/email/send",
				test: '/system/email.test'
			}
		},
		admin: {
			login: {
				one: "/login/one",
				two: "/login/two",
				pt: '/admin/login/pt',
				build: '/admin/login/build',
				unbind: '/admin/login.unbind',
                stsToken:"/login/sts-token"
            },
			logout: "/admin/logout"
		},
		cash: {
			bank: {
				account: "/cash/bank/account"
			},
			third: {
				third: '/cash/3th',
				install: '/cash/3th/install'
			},
			//手动存款
			deposit: "/cash/manual/deposit",
			//手动提款
			withdrawal: "/cash/manual/withdrawal",
			//手动发放优惠
			activity: "/cash/manual/activity",
			//手动减少余额
			decrease: "/cash/manual/decrease",
			//手动增加余额
			increase: "/cash/manual/increase",
			//手动发放反水
			rebate: "/cash/manual/rebate",
			//手动主钱包.子钱包互相转换
			childOrmaster: "/cash/manual/ps",
			// 批量下发付款
			payment: "/cash/payment",
			// 批量存提 增加余额
			allincrease: "/cash/manual.batch.increase",
			// 批量存提 减少余额
			alldecrease: "/cash/manual.batch.decrease",
			// 批量存提 返水
			allrebate: "/cash/manual.batch.rebate",
			// 批量存提 发放优惠
			allactivity: "/cash/manual.batch.activity"

		},
		message: {
			template: "/message/template",
			new: "/message/new"
		},
		commission: {
			fee: "/commission/fee"
		},
		commPOST: {
			commission: {
				level: "/commPOST /commission/level"
			}
		},
		//代理结算设置
		agency: {
			level: "/commission/level"
		},
		//优惠活动
		activity: {
			type: "/active/type",
		},
		copywriter: {
			proxy: "/copywriter/proxy",
			deposit: "/copywriter/deposit"
		},
		active: {
			manual: "/active/manual"
		},
	},
	PUT: {
		state: {
			$: /**
			 * 路由：/state/?name/*
			 * @param string name
			 * @param string ... args 可变参数
			 * @return string
			 */
			function (name, ...args) {
				return '/' + ['state', name, ...args].join('/');
			},
            tatus:'/agent/status'
		},
		wallet: {
			recharge: {
				$w: /**
				 * 路由：/wallet/recharge/?type\w
				 * @param string type 字母数字串，包括下划线
				 * @return string
				 */
				function (type) {
					return '/' + ['wallet', 'recharge', type].join('/');
				}
			}
		},
		lottery: {
			rate: '/lottery/rate',
			template: "/lottery/template",
			xe: '/lottery/xe',
			permission: {
				$: /**
				 * 路由：/lottery/permission/?/*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['lottery', 'permission', $1, ...args].join('/');
				}
			},
			rate: "/lottery/rate",
			fast: "/lottery/rate.fast",
			realtime: "/lottery/realtime"
		},
		system: {
			global: '/system/global',
			htlog: '/system/htlog',
			ip: '/system/ip',
			mail: '/system/mail',
			email: {
				$: "/system/email",
				templates: "/system/email.templates",
				settings: '/system/email.settings'
			},
			ipblacks: "/system/ipblacks",
			webSet: "/system/setting",
			emailSettings: "/system/email.settings",
			domain: "/system/domain"
		},
		// active:{
		//     oEdit:'/active/manual',
		// },
		user: {
			level: {
				$: "/user/level",
				set: "/user/level/set"
			},
			label: {
				$: "/user/label",
				bind: "/user/label/bind"
			},
			agent: {
				bank: {
					add: "/user/agent/bank",
					$: /**
					 * 路由：/lottery/permission/?/*
					 * @param string $1
					 * @param string ... args 可变参数
					 * @return string
					 */
					function ($1, ...args) {
						return '/' + ['user/agent', 'bank', $1, ...args].join('/');
					}
				},
				$: "/user/agent"
			},
			info: "/info/bank",
			setting: "/user/info/setting/"
		},
		widthdraw: {
			pw: {
				reset: "/widthdraw/pw/reset"
			}
		},
		sub: {
			accounts: "/sub/accounts"
		},
		cash: {
			bank: {
				account:"/cash/bank/account"
			},
			// 写备注
			comment: '/cash/payment/comment'
		},
		commission: {
			fee: "/commission/fee",
			agent: "/commission/agent",
			ad: "/commission/ad",
			level: "/commission/level",
			link: '/commission/link'
		},
		//优惠活动
		activity: {
			newType:"/active/type",
			type: {
				$: /**
				 * 路由： /active/type/?\\d*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['active/type', $1, ...args].join('/');
				}
			},
		},
		//代理文案 存款文案
		copywriter: {
			proxy: {
				newProxy: "/copywriter/proxy",
				$: /**
				 * 路由： /active/type/?\\d*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['copywriter/proxy', $1, ...args].join('/');
				}
			},
			deposit: {
				$: /**
				 * 路由： /active/type/?\\d*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['copywriter/deposit', $1, ...args].join('/');
				}
			},
			description: "/copywriter/desc",
			float: "/copywriter/float",
			carousel: "/copywriter/carousel",
			align:"/copywriter/float.style.align",
		},
		//活动模板新增/编辑
		actives: {
			activesEdit: "/actives" ///?id\\d
		},

		active: {
			manualEdit: "/active/manual",
			apply: {
				status: "/active/apply/status",
				comment: "/active/apply.comment"
			},
			rebate: "/active/rebate",
			manual: {
				$: /**
				 * 路由：/active/manual/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['active/manual', name, ...args].join('/');
				}
			}
		},
		//    模板优惠
		template: {
			//每日签到
			daily: '/active/template/daily.signin',
			//验证邮箱
			email: '/active/template/varify.email',
			//手机验证
			mobile: '/active/template/daily.mobile',
			//每日抽奖
			raffle: '/active/template/daily.raffle',
			//救援金
			rescue: '/active/template/rescue',
			//擂台赛
			contest: '/active/template/contest',
			//奖上奖
			awards: '/active/template/awards',
			//连续闯关
			breakthrough: '/active/template/breakthrough',

		},
		admin: {
			message: "/admin/message"
		}
	},
	DELETE: {
		state: {
			$: /**
			 * 路由：/state/?name/*
			 * @param string name
			 * @param string ... args 可变参数
			 * @return string
			 */
			function (name, ...args) {
				return '/' + ['state', name, ...args].join('/');
			}
		},
		lottery: {
			template: {
				$: /**
				 * 路由：/lottery/template/?/*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['lottery', 'template', $1, ...args].join('/');
				}
			},
			xe: '/lottery/xe',
			permission: '/lottery/permission'
		},
		system: {
			ip: '/system/ip',
			mail: '/system/emails',
			ipblacks: '/system/ipblacks',
			domain: "/system/domain",
		},
		user: {
			$: "/users",
			label: "/user/label",
			level: {
				set: '/user/level'
			},


		},
		sub: {
			account: {
				del:"/sub/accounts.role",
				$: /**
				 * 路由：/sub/accounts/?/*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['sub', 'accounts', $1, ...args].join('/');
				}
			},
			accounts: {
				role: {
					$: /**
					 * 路由：/sub/accounts/?/*
					 * @param string $1
					 * @param string ... args 可变参数
					 * @return string
					 */
					function ($1, ...args) {
						return '/' + ['sub', 'accounts.role', $1, ...args].join('/');
					}
				}
			}
		},
		commission: {
			agent: {
				$:"/commission/agent"
			},
			ad: "/commission/ad",
			link:"/commission/link",
			fee: "/commission/fee",
		},
		//优惠活动
		activity: {
			type: {
				$: /**
				 * 路由： /active/type/?\\d*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['active/type', $1, ...args].join('/');
				}
			},
		},
		//代理文案 存款文案
		copywriter: {
			proxy: {
				$: /**
				 * 路由： /active/type/?\\d*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['copywriter/proxy', $1, ...args].join('/');
				}
			},
			deposit: {
				$: /**
				 * 路由： /active/type/?\\d*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['copywriter/deposit', $1, ...args].join('/');
				}
			},
			desc: "/copywriter/desc",
			carousel: "/copywriter/carousel",
			float: '/copywriter/float'
		},
		active: {
			manualDel: "/active/manual",
			manual: {
				$: /**
				 * 路由：/active/manual/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['active/manual', name, ...args].join('/');
				}
			}
		},
		message: {
			$: /**
			 * 路由： /active/type/?\\d*
			 * @param string $1
			 * @param string ... args 可变参数
			 * @return string
			 */
			function ($1, ...args) {
				return '/' + ['message', $1, ...args].join('/');
			}
		},
		cash: {
			bank: {
				account: "/cash/bank/account"
			},
			threeTh: {
				del:"/cash/3th",
				$: /**
				 * 路由：/cash/3th/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['cash/3th', name, ...args].join('/');
				}
			}
		},
		notice: {
			$: /**
			 * 路由：/notice/?id\d
			 * @param string name
			 * @param string ... args 可变参数
			 * @return string
			 */
			function (name, ...args) {
				return '/' + ['notice', name, ...args].join('/');
			}
		}

	},
	PATCH: {
		lottery: {
			order: "/lottery/order",
			switch: '/lottery/switch',
			chase: '/lottery/chase/',
            handSettle:'/lottery/handSettle'
		},
		user: {
			level: {
				layer: "/user/level/layer",
				restore: "/user/level/restore",
				lock: "/user/level/lock"
			},
			agent: {
				$: "/user/agent",
				message: {
					$: /**
					 * 路由：/lottery/template/?/*
					 * @param string $1
					 * @param string ... args 可变参数
					 * @return string
					 */
					function ($1, ...args) {
						return '/' + ['lottery', 'template', $1, ...args].join('/');
					}
				},
				check: "/user/agent/check",
				messages: "/user/agent/message", // 修改代理资料,
				pw: "/user/agent.new.pw",
			},
			games: {
				third: "/user/games/3th"
			},
			info: {
				$: "/user/info",
				password: "/info/password",
				loginword: "/info/login/password",
				level: "/user/level/lock",
				agent: "/user/info/agent",
				base: "/info/base",
				infoLevel: "/user/info/level",
				memo:"/cash/withdraw/comment"
			},
			unused: 'user/unused',
			setting: "/user/info/setting/"
		},
		withdraw: {
			pw: {
				reset: "/withdraw/pw/reset"
			}
		},
		admin: {
			pwd:"/admin/pw",
			pw: {
				$: /**
				 * 路由：/admin/pw/?id\d/*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['admin', 'pw', $1, ...args].join('/');
				}
			}
		},
		sub: {
			accounts: {
				$: /**
				 * 路由：/sub/accounts/?id\d/*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['sub', 'accounts', $1, ...args].join('/');
				},
				pw: /**
				 * 路由：/sub/accounts/pw/?id\d/*
				 * @param string $1
				 * @param string ... args 可变参数
				 * @return string
				 */
				function ($1, ...args) {
					return '/' + ['sub', 'accounts/pw', $1, ...args].join('/');
				},
			}
		},
		cash: {
			bank: {
				account: "/cash/bank/account"
			},
			withdraw: {
				state: {
					$: /**
					 * 路由：/cash/withdraw/state/?id\d
					 * @param string name
					 * @param string ... args 可变参数
					 * @return string
					 */
					function (name, ...args) {
						return '/' + ['cash/withdraw/state', name, ...args].join('/');
					}

				},
				fee: "/cash/withdraw/fee/",
				user: {
					$: /**
					 * 路由：/cash/withdraw/state/?id\d
					 * @param string name
					 * @param string ... args 可变参数
					 * @return string
					 */
					function (name, ...args) {
						return '/' + ['cash/withdraw/user', name, ...args].join('/');
					}
				},
			},
			doMemo: '/cash/deposit/offline',
			third: "/cash/3th",
			payment: "/cash/payment",
			deposit: "/cash/deposit/online",
		},
		system: {
			currency: '/system/currency',
			same: "/system/same.accounts.settings",
			service: "/system/service",
			registration: "/system/registration",
			ipblacks: "/system/ipblacks",
			domain: "/system/domain"

		},
		actives: {
			actives: '/actives',
			oEdit: '/active/manual',

			actives: '/actives',
			rebate: "/actives/rebate"
		},
		commission: {
			incomes: "/commission/incomes",
			incomesArr: "/commission/incomes",
			agent: {
				$: /**
				 * 路由：/cash/bank/account/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['commission/agent', name, ...args].join('/');
				},
				$$: "/commission/agent"
			},
			fee: "/commission/fee",
			ad: "/commission/ad",
			withdrawal: "/commission/withdrawal",
			commis: "/commission/commis",
			link: {
				$: /**
				 * 路由：/commission/link/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['commission/link', name, ...args].join('/');
				},
				$$:"/commission/link",
			}
		},
		//代理文案 存款文案
		copywriter: {
			proxy: {
				$: /**
				 * 路由：/cash/bank/account/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['copywriter/proxy', name, ...args].join('/');
				}
			},
			deposit: {
				$: /**
				 * 路由：/cash/bank/account/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['copywriter/deposit', name, ...args].join('/');
				}
			},
			description: "/copywriter/desc",
			float: "/copywriter/float",
			desc: "/copywriter/desc",
			carousel: "/copywriter/carousel"
		},
		active: {
			rebate: {
				grant: "/active/rebate",
				search: {
					grant: "/active/rebate.grant"
				}
			},
			manualStatus: "/actives",
			manual: {
				$: /**
				 * 路由：/active/manual/?id\d
				 * @param string name
				 * @param string ... args 可变参数
				 * @return string
				 */
				function (name, ...args) {
					return '/' + ['active/manual', name, ...args].join('/');
				}
			}
		},
		message: {
			to:"/message",
			$: /**
			 * 路由：/message/?id\d
			 * @param string name
			 * @param string ... args 可变参数
			 * @return string
			 */
			function (name, ...args) {
				return '/' + ['message', name, ...args].join('/');
			}
		}
	}
};
const t = new Date();
const NOWYEAR = t.getFullYear();
global.ARRAYS = {
	// 注册来源
	PALYCHANNEL: [
		{"label": "全部", "value": ""},
		{"label": " PC", "value": "pc"},
		{"label": "H5", "value": "h5"},
		{"label": "其他", "value": "reserved"}
	],
	//代理注册来源
	PALYORIGINL: [
		{"label": "全部", "value": ""},
		{"label": "PC网站注册", "value": "2"},
		{"label": "H5网站注册", "value": "1"},
		{"label": "厅主后台创建", "value": "3"},
		{"label": "代理后台创建", "value": "4"}
	],

	//使用平台
	PLATFORMS: [
		{"label": "pc", "value": "pc", "id": "1"},
		{"label": "h5", "value": "h5", "id": "2"}
	],
	//使用平台来源
	PLATFORMS1: [
		{"label": "pc", "value": "1"},
		{"label": "h5", "value": "2"},
		{"label": "app", "value": "3"}
	],
	PLATFORMStWO: [
		{"label": "PC", "value": "PC"},
		{"label": "H5", "value": "H5"},
		{"label": "APP", "value": "APP"}
	],
	PLATFORMS1List: ["PC","H5","APP"],
	//在线状态
	onlineState: [
		{"label": "在线", "value": true},
		{"label": "离线", "value": false}
	],
	onlineState1: [
		{"label": "全部", "value": ""},
		{"label": "在线", "value": '1'},
		{"label": "离线", "value": '0'}
	],
	changeStatus: [
		{"label": "全部", "value": "all"},
		{"label": "未处理", "value": "pending"},
		{"label": "已存入", "value": "paid"},
		{"label": "已取消", "value": "canceled"}
	],
	// 超文本格式
	textState: [
		{"label": "是", "value": "true"},
		{"label": "否", "value": "false"}
	],
	//默认状态
	defaultState: [
		{"label": "是", "value": true},
		{"label": "否", "value": false}
	],
	defaultState1: [
		{"label": "是", "value": "1"},
		{"label": "否", "value": "0"}
	],
	//状态
	state: [
		{"label": "启用", "value": true},
		{"label": "停用", "value": false}
	],
	state1: [
		{"label": "启用", "value": "1"},
		{"label": "停用", "value": "0"}
	],
	state2: [
		{"label": "启用", "value": "enabled"},
		{"label": "停用", "value": "disabled"}
	],
	state3: [
		{"label": "全部", "value": ""},
		{"label": "启用", "value": 1},
		{"label": "停用", "value": 0}
	],
    state4: [
        {"label": "启用", "value": "enable"},
        {"label": "停用", "value": "disable"}
    ],
	//帐号状态
	accountState: [
		{"label": "在线", "value": true},
		{"label": "离线", "value": false}
	],
	//转帐状态
	payState: [
		{"label": "成功", "value": true},
		{"label": "失败", "value": false}
	],
	//付款状态
	paymentState: [
		{"label": "未付款", "value": "1"},
		{"label": "付款成功", "value": "2"},
		{"label": "付款失败", "value": "3"}
	],
	//刷新时间
	refreshTime: [
		{"label": "30秒", "value": "30"},
		{"label": "60秒", "value": "60"},
		{"label": "120秒", "value": "120"},
		{"label": "不刷新", "value": "0"},
	],
	//  支付类型
	registrationSource: [
		{"label": "微信", "value": "wx"},
		{"label": "支付宝", "value": "alipay"},
		{"label": "网银支付", "value": "unionpay"},
		{"label": "QQ扫码", "value": "qq"},
		{"label": "出款下发", "value": "tz"}
	],
	//  支付类型
	registrationSource3th: [
		{"label": "微信", "value": "wx"},
		{"label": "支付宝", "value": "alipay"},
		{"label": "网银支付", "value": "unionpay"},
		{"label": "QQ扫码", "value": "qq"}
	],
	// 支付类型2
	registrationSourceTwo: [
		{"label": "微信", "value": "wx"},
		{"label": "支付宝", "value": "alipay"},
		{"label": "网银支付", "value": "unionpay"},
		{"label": "QQ扫码", "value": "qq"}
	],
	//注册来源
	registrationSource2: ["wx", "alipay", "unionpay"],
	//支付状态
	// rejected:已拒绝, paid:已支持, prepare:准备支付, pending:待处理
	payType: [
		{"label": "已拒绝", "value": "rejected"},
		{"label": "已支付", "value": "paid"},
		{"label": "准备支付", "value": "prepare"},
		{"label": "待处理", "value": "pending"}
	],
	//体系
	system: [
		{"label": "代理", "value": "2"},
		{"label": "会员", "value": "1"}
	],
	//交易类别
	transactionCategory: [
		{"label": "收入", "value": "0"},
		{"label": "支出", "value": "1"},
		{"label": "额度转换", "value": "2"}
	],
	//资金流水 交易类型
	transaction: [
		{"label": "全部", "value": "1"},
		{"label": "线上出款", "value": "2"},
		{"label": "线上入款", "value": "3"},
		{"label": "子转主钱包", "value": "4"},
	],
	//交易类型
	transactionType: [{
		type: 1,
		arr: [{"label": "线上入款", "value": "线上入款"},
			{"label": "公司入款", "value": "公司入款"},
			{"label": "体育派彩", "value": "体育派彩"},
			{"label": "彩票派彩", "value": "彩票派彩"},
			{"label": "优惠活动", "value": "优惠活动"},
			{"label": "手动存款", "value": "手动存款"},
			{"label": "返水优惠", "value": "返水优惠"},
			{"label": "代理退佣", "value": "代理退佣"},
			{"label": "销售返点", "value": "销售返点"},
			{"label": "撤单退款", "value": "撤单退款"},
			{"label": "存入代理", "value": "存入代理"},
			{"label": "手动增加余额", "value": "手动增加余额"},
			{"label": "手动发放返水", "value": "手动发放返水"},
			{"label": "手动发放优惠", "value": "手动发放优惠"},
			{"label": "提款解冻", "value": "提款解冻"},
			{"label": "追号解冻", "value": "追号解冻"}]
	},
		{
			type: 2,
			arr: [{"label": "线上出款", "value": "线上出款"},
				{"label": "彩票下注", "value": "彩票下注"},
				{"label": "体育下注", "value": "体育下注"},
				{"label": "手动提款", "value": "手动提款"},
				{"label": "扣除优惠", "value": "扣除优惠"},
				{"label": "代理提款", "value": "代理提款"},
				{"label": "手动减少余额", "value": "手动减少余额"},
				{"label": "提款冻结", "value": "提款冻结"},
				{"label": "追号冻结", "value": "追号冻结"}]
		},
		{
			type: 3,
			arr: [{"label": "子转主钱包", "value": "子转主钱包"},
				{"label": "主转子钱包", "value": "主转子钱包"},
				{"label": "手动子转主钱包", "value": "手动子转主钱包"},
				{"label": "手动主转子钱包", "value": "手动主转子钱包"}]
		},

	],
	// 退佣状态
	rebateState: [
		{"label": "未发放", "value": "0"},
		{"label": "已发放", "value": "1"},
		{"label": "转下期", "value": "2"}
	],
	//退佣期数
	rebateNumber: [],
	// 文案类型
	fileType: [
		{"label": "帮助", "value": "help"},
		{"label": "代理", "value": "agent"},
		{"label": "存款", "value": "deposit"}
	],
	//
	fileTypeUse: [
		{"label": "微信存款", "value": "wechat_deposit"},
		{"label": "公司存款", "value": "company_deposit"},
		{"label": "第三方网银", "value": "unionpay_deposit"},
		{"label": "支付宝存款", "value": "alipay_deposit"},
		{"label": "全局", "value": "global"}
	],
	//使用于页面
	position: [
		{"label": "首页", "value": "home"},
		{"label": "电子页", "value": "egame"},
		{"label": "视讯页", "value": "live"},
		{"label": "彩票页", "value": "lottery"},
		{"label": "体育页", "value": "sport"},
		{"label": "代理页", "value": "agent"},
		{"label": "优惠页", "value": "coupon"},
	],

	//用户类型
	users: [
		{"label": "会员", "value": "1"},
		{"label": "代理", "value": "2"}
	],
	// 邮箱配置
	mailConfig:[
		{
			"label":"谷歌gmail邮箱服务器",
			"value":"smtp.gmail.com",
			"port":587,
			'is_ssl':0
		},
		{
			"label":"YAHOO邮箱服务器",
			"value":"smtp.mail.yahoo.com",
			"port":465,
			'is_ssl':1
		},
		{
			"label":"QQ邮箱服务器",
			"value":"smtp.qq.com",
			"port":465,
			'is_ssl':1
		},
		{
			"label":"163邮箱服务器",
			"value":"smtp.163.com",
			"mailport":465,
			'is_ssl':1
		}
	],
	// 支付场景
	paymentScenarios:[
		{
			"label": "全部",
			"value":""
		},
		{
			"label":"支付宝",
			"value":"alipay"
		},
		{
			"label":"微信支付",
			"value":"wechat"
		},
		{
			"label":"QQ钱包",
			"value":"qqpay"
		},
		{
			"label":"网银支付",
			"value":"cyberbank"
		},
		{
			"label":"京东支付",
			"value":"jdpay"
		},
		{
			"label":"快捷支付",
			"value":"unionpay"
		},
		{
			"label":"百度支付",
			"value":"baidupay"
		},
		{
			"label":"财付通",
			"value":"tenpay"
		},
		{
			"label":"点卡支付",
			"value":"kapay"
		},
		{
			"label":"云闪付",
			"value":"quickpay"
		}
	],
	paymentScenariosOne:[
		{
			"label":"支付宝",
			"value":"alipay"
		},
		{
			"label":"微信支付",
			"value":"wechat"
		},
		{
			"label":"QQ钱包",
			"value":"qqpay"
		},
		{
			"label":"网银支付",
			"value":"cyberbank"
		},
		{
			"label":"京东支付",
			"value":"jdpay"
		},
		{
			"label":"快捷支付",
			"value":"unionpay"
		},
		{
			"label":"百度支付",
			"value":"baidupay"
		},
		{
			"label":"财付通",
			"value":"tenpay"
		},
		{
			"label":"点卡支付",
			"value":"kapay"
		},
		{
			"label":"云闪付",
			"value":"quickpay"
		}
	],
	proxyCopyList:[{"label": "赚取佣金", "value":"赚取佣金", "key":1},{"label": "如何运作", "value":"如何运作","key": 2},{"label": "关于我们", "value":"关于我们", "key": 3} ],
	paymentScenariosList: [ "alipay","wechat","qqpay","cyberbank","jdpay","unionpay","baidupay","tenpay","kapay","quickpay"]
};
// 快捷菜单
global.QUICKMENU = [];
global.QUICKCD = {};
// 快捷菜单数量
global.qkNumber = 0;
// markdown
global.mdLength = 5000;
// 过滤请求接口
global.RESInterface = '';
// 全站语言请求头部
global.LANGHEAD = {
	'zh-CN': 'zh-CN,zh;q=0.9',
	'zh-HK': 'zh-HK,zh;q=0.9',
	'en-US': 'en-US,en;q=0.9',
}
// 全局注单配置
global.NOTESQUERYCONFIG = {
	lottery: {
		formConfig: [
			{"type": "quickDate", "showTimes": true},//快捷日期
			{
				"prop": "type",
				"value": "",
				"type": "select",
				"label": "类型",
				"list": [{"label": "全部", "value": ""},
					{"label": "官方", "value": "standard"},
					{ "label": "信用", "value": "fast"}]
			},
			{"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
			{"prop": "order_number", "value": "", "type": "text", "label": "注单号"},
			{
				"prop": "lottery_id", "value": "", "label": "彩票名称", "type": "select",
				"list": []
			},
			{"prop": "lottery_number", "value": "", "type": "text", "label": "期号"},
			{
				"prop": "order_origin", "value": "", "label": "来源", "type": "select",
				"list": ARRAYS.PLATFORMS1
			},
			{
				"type": "dateTimeGroup",
				"label": "投注时间",
				"prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
					"prop": "end_time",
					"value": "",
					"label": "结束时间"
				}]
			}],
		columnsUrls: {
			lottery: "/static/json/Note/lottery/columns.json"
		},
		baseUrl: URL.api + ROUTES.GET.order.$,
		old_baseurl: URL.api + ROUTES.GET.order.$
	},
	live: {
		formConfig: [
			{"type": "quickDate", "showTimes": true},//快捷日期
			{"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
			{"prop": "order_number", "value": "", "type": "text", "label": "注单号"},
			{
				"type": "dateTimeGroup",
				"label": "投注时间",
				"prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
					"prop": "end_time",
					"value": "",
					"label": "结束时间"
				}]
			}],
		columnsUrls: {
			AB: '/static/json/Note/video/LEBOcolumns.json',
			LEBO: '/static/json/Note/video/LEBOcolumns.json',
			DG: '/static/json/Note/video/DGcolumns.json',
			GC: '/static/json/Note/video/DGcolumns.json',
			BG: '/static/json/Note/video/LEBOcolumns.json',
			CT: '/static/json/Note/video/DGcolumns.json',
			OG: '/static/json/Note/video/DGcolumns.json',
			AG: '/static/json/Note/video/DGcolumns.json',
			BBIN: '/static/json/Note/video/DGcolumns.json',
			MG: '/static/json/Note/video/LEBOcolumns.json'
		},
		baseUrl: URL.api + '/order3th/list/',
		old_baseurl: URL.api + ROUTES.GET.order.live
	},
	egame:{
		formConfig: [
			{"type": "quickDate", "showTimes": true},//快捷日期
			{"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
			{"prop": "order_number", "value": "", "type": "text", "label": "注单号"},
			{
				"prop": "type_child",
				"value": "",
				"type": "select",
				"label": "游戏类型",
				"list": [],
				"filterable": true
			},
			{"prop": "game_id", "value": "", "type": "select", "label": "游戏名称", "list": []},
			{
				"type": "dateTimeGroup",
				"label": "投注时间",
				"prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
					"prop": "end_time",
					"value": "",
					"label": "结束时间"
				}]
			}],
		columnsUrls: {
			YOPLAY: '/static/json/Note/sport/YOPLAYcolumns.json',
			JDB: '/static/json/Note/sport/JDBcolumns.json',
			CQ9: '/static/json/Note/sport/CQ9columns.json',
			GNS: '/static/json/Note/sport/GNScolumns.json',
			FG: '/static/json/Note/sport/FGcolumns.json',
			HB: '/static/json/Note/sport/HBcolumns.json',
			MW: '/static/json/Note/sport/MWcolumns.json',
			AG: '/static/json/Note/sport/AGcolumns.json',
		},
		baseUrl: URL.api + '/order3th/list/',
		old_baseurl: URL.api + ROUTES.GET.order.esports
	},
	fish: {
		formConfig: [
			{"type": "quickDate", "showTimes": true},//快捷日期
			{"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
			{"prop": "order_number", "value": "", "type": "text", "label": "注单号"},
			{"prop": "order_number", "value": "", "type": "text", "label": "局号"},
			{
				"type": "dateTimeGroup",
				"label": "投注时间",
				"prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
					"prop": "end_time",
					"value": "",
					"label": "结束时间"
				}]
			}],
		columnsUrls: {
			BG: '/static/json/Note/fishing/BGcolumns.json',
		},
		baseUrl: URL.api + '/order/fishing/',
		// baseUrl: URL.api + '/order/fishing/'
	}
}
global.islogin = {user: '', bank: '', record: '', order: '', userinfo: '', safe: '', msge: '', notice: ''};
// 日期格式化
Date.prototype.format = function (fmt, b) {
    b = !!b || !1;
    var o = {
        "M+": b ? this.getUTCMonth() + 1 : this.getMonth() + 1,                 //月份
        "d+": b ? this.getUTCDate() : this.getDate(),                    //日
        "h+": b ? this.getUTCHours() : this.getHours(),                   //小时
        "m+": b ? this.getUTCMinutes() : this.getMinutes(),                 //分
        "s+": b ? this.getUTCSeconds() : this.getSeconds(),                 //秒
        "q+": Math.floor((b ? this.getUTCMonth() + 3 : this.getMonth() + 3) / 3), //季度
        "S": b ? this.getUTCMilliseconds() : this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (b ? this.getUTCFullYear() + "" : this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};
Date.prototype.timer = function () {
    return {y: this.getFullYear(), M: this.getMonth() + 1, d: this.getDate()}
};
