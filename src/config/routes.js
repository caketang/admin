export default [
    {
        path: '/login', //登录
        meta: {auth: false},
        component: resolve => require(['../page/login/Login'], resolve),
        hidden: true//不显示在导航中
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '首 页',
        iconCls: 'fa fa-home',//图标样式class,
        children: [{
            path: '/index',
            component: resolve => require(['../page/index/indexEcharts111'], resolve),
            name: '首 页',
            iconCls: 'fa fa-home',//图标样式class,
        }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '系统消息',
        iconCls: 'fa fa-home',//图标样式class,
        children: [{
            path: '/message',
            component: resolve => require(['../page/webSet/sysMessage'], resolve),
            name: '系统消息',
            iconCls: 'fa fa-home',//图标样式class,
        }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/home'], resolve),
        name: '横版首页',
        iconCls: 'fa fa-home',//图标样式class,
        children: [{
            path: '/home',
            component: resolve => require(['../page/index//home'], resolve),
            name: '横版首页',
            iconCls: 'fa fa-home',//图标样式class,
        }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '彩票游戏管理',
        iconCls: 'fa fa-cog',//图标样式class
        children: [{
            path: '/LotteryModel',
            component: resolve => require(['../page/game/lottery/LotteryModel'], resolve),
            iconCls: 'fa fa-user-o',
            name: '彩票模板管理'
        },
            {
                path: '/lotterModelSet',
                component: resolve => require(['../page/game/lottery/lotterModelSet'], resolve),
                iconCls: 'fa fa-user-o',
                name: '彩票模板设置',
                //hidden: true//不显示在导航中
            },
            {
                path: '/lotterInstantNote',
                component: resolve => require(['../page/instantNote/lotterInstantNote'], resolve),
                iconCls: 'fa fa-user-o',
                name: '彩票即时注单'
            },
            {
                path: '/lotterSingleNote',
                component: resolve => require(['../page/game/lottery/lotterSingleNote'], resolve),
                iconCls: 'fa fa-user-o',
                name: '彩票注单管理'
            },
            {
                path: '/lotterPeriodManagement',
                component: resolve => require(['../page/game/lottery/lotterPeriodManagement'], resolve),
                iconCls: 'fa fa-user-o',
                name: '彩期管理'
            },
            {
                path: '/lotteryResults',
                component: resolve => require(['../page/game/lottery/lotteryResults'], resolve),
                iconCls: 'fa fa-user-o',
                name: '开奖结果管理'
            }, {
                path: '/liuhecaiSettings',
                component: resolve => require(['../page/game/lottery/liuhecaiSettings'], resolve),
                iconCls: 'fa fa-user-o',
                name: '六合彩设置'
            },
            {
                path: '/lotteryMonitored',
                component: resolve => require(['../page/accountSet/create'], resolve),
                iconCls: 'fa fa-user-o',
                name: '彩票监控系统'
            }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '注单管理',
        iconCls: 'fa fa-cog',//图标样式class
        children: [{
            path: '/noteManagement',
            component: resolve => require(['../page/instantNote/noteManagement'], resolve),
            iconCls: 'fa fa-user-o',
            name: '注单管理'
        }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '账号管理',
        iconCls: 'fa fa-cog',//图标样式class
        children: [{
            path: '/memberManagement',
            component: resolve => require(['../page/userManagement/memberManagement/memberManagement'], resolve),
            iconCls: 'fa fa-user-o',
            name: '会员管理'
        },
            {
                path: '/agentAccount',
                component: resolve => require(['../page/userManagement/agentAccount/agentAccount'], resolve),
                iconCls: 'fa fa-user-o',
                name: '代理管理'
            },
            {
                path: '/agentAudit',
                component: resolve => require(['../page/accountManagement/agentAudit'], resolve),
                iconCls: 'fa fa-user-o',
                name: '代理审核'
            },
            {
                path: '/memberHierarchy',
                component: resolve => require(['../page/userManagement/memberHierarchy'], resolve),
                iconCls: 'fa fa-user-o',
                name: '会员层级'
            },
            {
                path: '/memberLabel',
                component: resolve => require(['../page/userManagement/memberLabel'], resolve),
                iconCls: 'fa fa-user-o',
                name: '会员标签'
            },
            {
                path: '/restrictAccount',
                component: resolve => require(['../page/accountManagement/restrictAccount'], resolve),
                iconCls: 'fa fa-user-o',
                name: '帐号黑名单'
            },
            {
                path: '/idleAccount',
                component: resolve => require(['../page/userManagement/idleAccount'], resolve),
                iconCls: 'fa fa-user-o',
                name: '闲置帐号列表'
            },
            {
                path: '/LoginAccount',
                component: resolve => require(['../page/userManagement/loginAccount'], resolve),
                iconCls: 'fa fa-user-o',
                name: '会员登录查询'
            },
            {
                path: '/childAccount',
                component: resolve => require(['../page/userManagement/childAccount'], resolve),
                iconCls: 'fa fa-user-o',
                name: '子帐号列表'
            },
            {
                path: '/childRoleAccount',
                component: resolve => require(['../page/userManagement/childRoleAccount'], resolve),
                iconCls: 'fa fa-user-o',
                name: '子帐号角色管理'
            },
            {
                path: '/otherGameAccount',
                component: resolve => require(['../page/userManagement/otherGameAccount'], resolve),
                iconCls: 'fa fa-user-o',
                name: '第三方游戏帐户'
            }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '现金系统',
        iconCls: 'fa fa-cog',//图标样式class
        children: [{
            path: '/bankManagement',
            component: resolve => require(['../page/cash/bankManagement'], resolve),
            iconCls: 'fa fa-user-o',
            name: '银行管理'
        },
            {
                path: '/otherPayment',
                component: resolve => require(['../page/cash/otherPayment'], resolve),
                iconCls: 'fa fa-user-o',
                name: '第三方支付'
            },
            {
                path: '/receivableBank',
                component: resolve => require(['../page/cash/receivableBank'], resolve),
                iconCls: 'fa fa-user-o',
                name: '收款银行帐号管理'
            },
            {
                path: '/onLineReceipts',
                component: resolve => require(['../page/cash/onLineReceipts'], resolve),
                iconCls: 'fa fa-user-o',
                name: '线上入款'
            },
            {
                path: '/offlineReceipts',
                component: resolve => require(['../page/cash/offlineReceipts'], resolve),
                iconCls: 'fa fa-user-o',
                name: '线下入款'
            },
            {
                path: '/memberGetOut',
                component: resolve => require(['../page/cash/memberGetOut'], resolve),
                iconCls: 'fa fa-user-o',
                name: '会员出款'
            },
            {
                path: '/manual',
                component: resolve => require(['../page/cash/manual/manual'], resolve),
                iconCls: 'fa fa-user-o',
                name: '人工存提'
            },
            {
                path: '/fundDetails',
                component: resolve => require(['../page/cash/fundDetails'], resolve),
                iconCls: 'fa fa-user-o',
                name: '资金流水'
            },
            {
                path: '/memberBalance',
                component: resolve => require(['../page/statement/memberBalance'], resolve),
                iconCls: 'fa fa-user-o',
                name: '会员余额'
            },
            {
                path: '/fundDetailsSummary',
                component: resolve => require(['../page/statement/fundDetailsSummary'], resolve),
                iconCls: 'fa fa-user-o',
                name: '出入款汇总'
            },
            {
                path: '/transferRecord',
                component: resolve => require(['../page/cash/transferRecord'], resolve),
                iconCls: 'fa fa-user-o',
                name: '转帐记录'
            },
            {
                path: '/payment',
                component: resolve => require(['../page/statement/payment'], resolve),
                iconCls: 'fa fa-user-o',
                name: '付款'
            }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '公告消息',
        iconCls: 'fa fa-cog',//图标样式class
        children: [
            {
                path: '/message',
                component: resolve => require(['../page/message/message'], resolve),
                iconCls: 'fa fa-user-o',
                name: '公告管理'
            },
            {
                path: '/notice',
                component: resolve => require(['../page/webSet/notice'], resolve),
                iconCls: 'fa fa-user-o',
                name: '消息管理'
            }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '报表管理',
        iconCls: 'fa fa-cog',//图标样式class
        children: [{
            path: '/sumStatement',
            component: resolve => require(['../page/statement/sumStatement'], resolve),
            iconCls: 'fa fa-user-o',
            name: '总报表'
        },
            {
                path: '/playerStatement',
                component: resolve => require(['../page/statement/playerStatement'], resolve),
                iconCls: 'fa fa-user-o',
                name: '玩家报表'
            },
            {
                path: '/gameStatement',
                component: resolve => require(['../page/statement/gameStatement'], resolve),
                iconCls: 'fa fa-user-o',
                name: '游戏报表'
            },
            {
                path: '/preActStatement',
                component: resolve => require(['../page/statement/preActStatement'], resolve),
                iconCls: 'fa fa-user-o',
                name: '优惠报表'
            },]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '代理退佣',
        iconCls: 'fa fa-cog',//图标样式class
        children: [{
            path: '/CommissionFeeset',
            component: resolve => require(['../page/agent/commissionFeeset'], resolve),
            iconCls: 'fa fa-user-o',
            name: '退佣手续费设定'
        },
            {
                path: '/CommissionSet',
                component: resolve => require(['../page/agent/commissionSet'], resolve),
                iconCls: 'fa fa-user-o',
                name: '代理退佣设定'
            },
            {
                path: '/CommissionIncomeQuery',
                component: resolve => require(['../page/agent/commissionIncomeQuery'], resolve),
                iconCls: 'fa fa-user-o',
                name: '退佣收入查询'
            },
            {
                path: '/agencyStatistics',
                component: resolve => require(['../page/agent/agencyStatistics'], resolve),
                iconCls: 'fa fa-user-o',
                name: '代理统计'
            },
            {
                path: '/agentResources',
                component: resolve => require(['../page/webSet/promotionalResources'], resolve),
                iconCls: 'fa fa-user-o',
                name: '代理推广图片资源'
            },
            {
                path: '/agentSettlementSet',
                component: resolve => require(['../page/agent/agentSettlementSet'], resolve),
                iconCls: 'fa fa-user-o',
                name: '代理结算设置'
            },
            {
                path: '/agentDrawing',
                component: resolve => require(['../page/agent/agentDrawing'], resolve),
                iconCls: 'fa fa-user-o',
                name: '代理提款'
            },
            {
                path: '/RefundCommissionPeriod',
                component: resolve => require(['../page/agent/refundCommissionPeriod'], resolve),
                iconCls: 'fa fa-user-o',
                name: '退佣期数'
            },
            {
                path: '/subAgentRebate',
                component: resolve => require(['../page/agent/subAgentRebate'], resolve),
                iconCls: 'fa fa-user-o',
                name: '代理下级佣金'
            }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '系统设置',
        iconCls: 'fa fa-cog',//图标样式class
        children: [
            {
                path: '/operationLog',
                component: resolve => require(['../page/systemSettings/operationLog'], resolve),
                iconCls: 'fa fa-user-o',
                name: '会员操作日志'
            },
            {
                path: '/sysLog',
                component: resolve => require(['../page/systemSettings/sysLog'], resolve),
                iconCls: 'fa fa-user-o',
                name: '后台操作日志'
            },
            {
                path: '/IpBlacklist',
                component: resolve => require(['../page/systemSettings/IpBlacklist'], resolve),
                iconCls: 'fa fa-user-o',
                name: 'IP黑名单'
            },
            {
                path: '/fieldSettings',
                component: resolve => require(['../page/systemSettings/fieldSettings'], resolve),
                iconCls: 'fa fa-user-o',
                name: '全域设置'
            },
            {
                path: '/emailList',
                component: resolve => require(['../page/systemSettings/emailList'], resolve),
                iconCls: 'fa fa-user-o',
                name: '邮件列表'
            },
            {
                path: '/emailMode',
                component: resolve => require(['../page/systemSettings/emailMode'], resolve),
                iconCls: 'fa fa-user-o',
                name: '邮件模板'
            },
            {
                path: '/registerSet',
                component: resolve => require(['../page/webSet/registerSet'], resolve),
                iconCls: 'fa fa-user-o',
                name: '注册设置会员'
            },
            {
                path: '/webSet',
                component: resolve => require(['../page/webSet/webSet'], resolve),
                iconCls: 'fa fa-user-o',
                name: '站点设置'
            },
            {
                path: '/currencySettings',
                component: resolve => require(['../page/systemSettings/currencySettings'], resolve),
                iconCls: 'fa fa-user-o',
                name: '货币设定'
            },
            {
                path: '/duplicateAccount',
                component: resolve => require(['../page/userManagement/duplicateAccount'], resolve),
                iconCls: 'fa fa-user-o',
                name: '重复账号'
            },
            {
                path: '/weChat',
                component: resolve => require(['../page/systemSettings/weChat'], resolve),
                iconCls: 'fa fa-user-o',
                name: '微信公众号安装'
            },
            {
                path: '/otherService',
                component: resolve => require(['../page/systemSettings/otherService'], resolve),
                iconCls: 'fa fa-user-o',
                name: '第三方客服'
            },
            {
                path: '/webService',
                component: resolve => require(['../page/systemSettings/webService'], resolve),
                iconCls: 'fa fa-user-o',
                name: '网站服务'
            }
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '优惠活动管理',
        iconCls: 'fa fa-cog',//图标样式class
        children: [{
            path: '/typeList',
            component: resolve => require(['../page/preAct/typeList'], resolve),
            iconCls: 'fa fa-user-o',
            name: '优惠类型列表'
        }, {
            path: '/activeSet',
            // component: resolve => require(['../page/preAct/activeSet'], resolve),
            component: resolve => require(['../page/preAct/activeSet(副本)'], resolve),
            iconCls: 'fa fa-user-o',
            name: '优惠活动设置'
        },
        {
            path: '/contentManagement',
            component: resolve => require(['../page/preAct/contentManagement'], resolve),
            iconCls: 'fa fa-user-o',
            name: '优惠活动内容管理'
        },
        {
            path: '/apply',
            component: resolve => require(['../page/preAct/apply'], resolve),
            iconCls: 'fa fa-user-o',
            name: '优惠申请'
        },
        {
            path: '/discountSetting',
            component: resolve => require(['../page/preAct/累心'], resolve),
            iconCls: 'fa fa-user-o',
            name: '返水优惠设定'
        },
        {
            path: '/discountQuery',
            component: resolve => require(['../page/preAct/discountQuery'], resolve),
            iconCls: 'fa fa-user-o',
            name: '返水查询-日返水'
        }
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '广告方案管理',
        iconCls: 'fa fa-cog',//图标样式class
        children: [{
            path: '/ADManage',
            component: resolve => require(['../page/webSet/ADList'], resolve),
            iconCls: 'fa fa-user-o',
            name: '轮播广告'
        },
            {
                path: '/ADHome',
                component: resolve => require(['../page/ADManage/ADHome'], resolve),
                iconCls: 'fa fa-user-o',
                name: '说明文案管理'
            },
            {
                path: '/ckManage',
                component: resolve => require(['../page/webSet/ckManage'], resolve),
                iconCls: 'fa fa-user-o',
                name: '浮动图管理'
            },
            {
                path: '/textEdit-2',
                component: resolve => require(['../components/textEdit-2'], resolve),
                iconCls: 'fa fa-user-o',
                name: '化理方案'
            },
            {
                path: '/textEdit-2',
                component: resolve => require(['../components/textEdit-2'], resolve),
                iconCls: 'fa fa-user-o',
                name: '存款文案'
            }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: 'DEMO',
        iconCls: 'fa fa-cog',//图标样式class
        children: [
            {
                path: '/vipCs',
                component: resolve => require(['../page/demo/vipCs'], resolve),
                iconCls: 'fa fa-user-o',
                name: '5.4.2 会员等级设定'
            },
            {
                path: '/DEMO1',
                component: resolve => require(['../page/demo/demo1'], resolve),
                iconCls: 'fa fa-user-o',
                name: 'demo1'
            },
            {
                path: '/DEMO2',
                component: resolve => require(['../page/demo/demo2'], resolve),
                iconCls: 'fa fa-user-o',
                name: 'demo2'
            },
            {
                path: '/DEMO4',
                component: resolve => require(['../page/demo/demo4'], resolve),
                iconCls: 'fa fa-user-o',
                name: 'demo4'//双排from表单
            },
            {
                path: '/DEMO5',
                component: resolve => require(['../page/demo/demo5'], resolve),
                iconCls: 'fa fa-user-o',
                name: 'demo5'//横版布局
            },
            {
                path: '/DEMO6',
                component: resolve => require(['../page/demo/demo6'], resolve),
                iconCls: 'fa fa-user-o',
                name: 'demo6'//横版布局
            },
            {
                path: '/moneyCs',
                component: resolve => require(['../page/demo/moneyCs'], resolve),
                iconCls: 'fa fa-user-o',
                name: 'moneyCs'
            }]
    }
]