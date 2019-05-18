export default [
    {
        path: '/login', //登录
        meta: {auth: false},
        component: resolve => require(['../page/login/Login'], resolve),
        hidden: true//不显示在导航中
    },
    {
        path: '/init', //登录
        meta: {auth: false},
        component: resolve => require(['../page/login/init'], resolve),
        hidden: true//不显示在导航中
    },
    {
        path: '/authorization', //总厅跳转授权
        meta: {auth: false},
        component: resolve => require(['../page/login/authorization'], resolve),
        hidden: true//不显示在导航中
    },
    {
        path: '/setup',
        component: resolve => require(['../page/setup/setup'], resolve),
        iconCls: '',
        name: '网站配置',
        hidden: true//不显示在导航中
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '默认首页',
        iconCls: '',//图标样式class,
        hidden: true,
        children: [{
            path: '/index',
            component: resolve => require(['../page/index/indexEcharts'], resolve),
            name: '首页',
            iconCls: '',//图标样式class,
            hidden: true
        },
            {
                path: '/errorPage',
                component: resolve => require(['../page/errorPage/errorPage'], resolve),
                name: 'error',
                iconCls: '',//图标样式class,
                hidden: true
            }]
    },
    //快捷导航
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '快捷',
        iconCls: 'iconfont icon-caidanguanli',//图标样式class,
        children: []
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '网站',
        iconCls: 'iconfont icon-dianpudanganwangzhan',//图标样式class,
        children: [
            {
                path: '/ADList',
                component: resolve => require(['../page/webSet/ADList'], resolve),
                iconCls: '',
                name: '轮播广告'
            },
            {
                path: '/ADHome',
                component: resolve => require(['../page/ADManage/ADHome'], resolve),
                iconCls: '',
                name: '文案管理'
            },
            {
                path: '/proxyCopy',
                component: resolve => require(['../page/ADManage/proxyCopy'], resolve),
                iconCls: '',
                name: '代理文案'
            },
            {
                path: '/depositCopy',
                component: resolve => require(['../page/ADManage/depositCopy'], resolve),
                iconCls: '',
                name: '存款文案'
            },
            {
                path: '/ckManage',
                component: resolve => require(['../page/webSet/ckManage'], resolve),
                iconCls: '',
                name: '浮动图管理'
            },
            {
                path: '/promotionalResources',
                component: resolve => require(['../page/webSet/promotionalResources'], resolve),
                name: '代理推广资源',
                iconCls: '',//图标样式class,
            },
            {
                path: '/registerSet',
                component: resolve => require(['../page/webSet/registerSet'], resolve),
                name: '注册设置',
                iconCls: '',//图标样式class,
            },
            // {
            //     path: '/webSet',
            //     component: resolve => require(['../page/webSet/webSet'], resolve),
            //     name: '站点设置',
            //     iconCls: '',//图标样式class,
            // },
            {
                path: '/sysMessage',
                component: resolve => require(['../page/webSet/sysMessage'], resolve),
                name: '消息',
                iconCls: '',//图标样式class,
                hidden: true//不显示在导航中
            },
            {
                path: '/notice',
                component: resolve => require(['../page/webSet/notice'], resolve),
                iconCls: '',
                name: '公告管理'
            },
            {
                path: '/msgManagement',
                component: resolve => require(['../page/webSet/msgManagement.vue'], resolve),
                iconCls: '',
                name: '消息管理'
            },
            {
                path: '/resourcesManagement',
                component: resolve => require(['../page/webSet/resourcesManagement'], resolve),
                iconCls: '',
                name: '资源站管理'
            }
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '营销',
        iconCls: 'iconfont icon-yingxiao',//图标样式class
        children: [{
            path: '/apply',
            component: resolve => require(['../page/preAct/apply'], resolve),
            iconCls: '',
            name: '优惠申请'
        },
            {
                path: '/typeList',
                component: resolve => require(['../page/preAct/typeList'], resolve),
                iconCls: '',
                name: '优惠类型'
            },
            {
                path: '/activeSet',
                component: resolve => require(['../page/preAct/activeSet'], resolve),
                iconCls: '',
                name: '优惠模板'
            },
            {
                path: '/addActiveSet',
                component: resolve => require(['../page/preAct/addActiveSet.vue'], resolve),
                iconCls: '',
                name: '创建活动模板',
                hidden: true
            },
            {
                path: '/activeMode_1',
                component: resolve => require(['../page/preAct/activeMode_1.vue'], resolve),
                iconCls: '',
                name: '每日签到模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_2',
                component: resolve => require(['../page/preAct/activeMode_2.vue'], resolve),
                iconCls: '',
                name: '邮箱验证模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_3',
                component: resolve => require(['../page/preAct/activeMode_3.vue'], resolve),
                iconCls: '',
                name: '手机验证模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_4',
                component: resolve => require(['../page/preAct/activeMode_4.vue'], resolve),
                iconCls: '',
                name: '每日抽奖模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_5',
                component: resolve => require(['../page/preAct/activeMode_5.vue'], resolve),
                iconCls: '',
                name: '救援金模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_6',
                component: resolve => require(['../page/preAct/activeMode_6.vue'], resolve),
                iconCls: '',
                name: '擂台赛模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_7',
                component: resolve => require(['../page/preAct/activeMode_7.vue'], resolve),
                iconCls: '',
                name: '奖上奖模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_8',
                component: resolve => require(['../page/preAct/activeMode_8.vue'], resolve),
                iconCls: '',
                name: '连续闯关模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_9',
                component: resolve => require(['../page/preAct/activeMode_9.vue'], resolve),
                iconCls: '',
                name: '存款优惠模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_10',
                component: resolve => require(['../page/preAct/activeMode_10.vue'], resolve),
                iconCls: '',
                name: '注册优惠模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_email',
                component: resolve => require(['../page/preAct/activeMode_email.vue'], resolve),
                iconCls: '',
                name: '模板优惠设置(邮箱验证)',
                hidden: true
            },
            {
                path: '/contentManagement',
                component: resolve => require(['../page/preAct/contentManagement'], resolve),
                iconCls: '',
                name: '手动优惠'
            },
            {
                path: '/discount',
                component: resolve => require(['../page/preAct/discount'], resolve),
                iconCls: '',
                name: '返水活动'
            },
            {
                path: '/discountCondition',
                component: resolve => require(['../page/preAct/discountCondition'], resolve),
                iconCls: '',
                name: '新增返水活动',
                hidden: true
            },
            {
                path: '/queryDetail',
                component: resolve => require(['../page/preAct/queryDetail'], resolve),
                iconCls: '',
                name: '查询详情',
                hidden: true
            },
            {
                path: '/discountSetting',
                component: resolve => require(['../page/preAct/discountSetting'], resolve),
                iconCls: '',
                name: '返水优惠设定'
            },
            {
                path: '/discountCounting',
                component: resolve => require(['../page/preAct/discountCounting'], resolve),
                iconCls: '',
                name: '返水查询'
            },
            {
                path: '/discountDetail',
                component: resolve => require(['../page/preAct/discountDetail'], resolve),
                iconCls: '',
                name: '返水活动详情',
                hidden: true
            },
            {
                path: '/memberDetail',
                component: resolve => require(['../page/preAct/memberDetail'], resolve),
                iconCls: '',
                name: '会员返水详情',
                hidden: true
            }
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '游戏',
        iconCls: 'iconfont icon-37750',//图标样式class
        children: [
            {
                path: '/lotteryModel',
                component: resolve => require(['../page/lottey/lotteryModel'], resolve),
                iconCls: '',
                name: '彩票游戏模板'
            },
            {
                path: '/lotteryOdds',
                component: resolve => require(['../page/lottey/lotteryOdds'], resolve),
                iconCls: '',
                name: '彩票赔率',
                hidden: true//不显示在导航中
            },
            {
                path: '/lotterInstantNote',
                component: resolve => require(['../page/instantNote/lotterInstantNote'], resolve),
                iconCls: '',
                name: '彩票即时注单'
            },
            {
                path: '/lotterSingleNote',
                component: resolve => require(['../page/lottey/lotterSingleNote'], resolve),
                iconCls: '',
                name: '彩票注单管理'
            },
            {
                path: '/lotterPeriodManagement',
                component: resolve => require(['../page/lottey/lotterPeriodManagement'], resolve),
                iconCls: '',
                name: '彩票设定'
            },
            {
                path: '/lotterSort',
                component: resolve => require(['../page/lottey/lotterSort'], resolve),
                iconCls: '',
                name: '彩票排序'
            },
            {
                path: '/lotteryResults',
                component: resolve => require(['../page/lottey/lotteryResults'], resolve),
                iconCls: '',
                name: '开奖结果'
            },
            //自开彩
            {
                path: '/lotteryZKCseting',
                component: resolve => require(['../page/lottey/lotteryZKCseting'], resolve),
                iconCls: '',
                name: '自开彩管理'
            },
            //手动开奖
            {
                path: '/lotteryZKCmanual',
                component: resolve => require(['../page/lottey/lotteryZKCmanual'], resolve),
                iconCls: '',
                name: '自开彩手动开奖'
            },
            {
                path: '/lotteryZKCchange',
                component: resolve => require(['../page/lottey/lotteryZKCchange'], resolve),
                iconCls: '',
                name: '自开彩控盘管理'
            },
            {
                path: '/lotteryZKCprophesy',
                component: resolve => require(['../page/lottey/lotteryZKCprophesy'], resolve),
                iconCls: '',
                name: '自开彩预设彩果'
            },
            {
                path: '/lotteryZKClarge',
                component: resolve => require(['../page/lottey/lotteryZKClarge'], resolve),
                iconCls: '',
                name: '自开彩大额投注'
            }]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '风控',
        iconCls: 'iconfont icon-shield',//图标样式class
        children: [
            // {
            //     path: '/strategy',
            //     component: resolve => require(['../page/strategy/strategy'], resolve),
            //     iconCls: '',
            //     name: '注单监控'
            // },
            // {
            //     path: '/timeLimit',
            //     component: resolve => require(['../page/strategy/timeLimit'], resolve),
            //     iconCls: '',
            //     name: '实时限号'
            // },
            // {
            //     path: '/autoDrop',
            //     component: resolve => require(['../page/strategy/autoDrop'], resolve),
            //     iconCls: '',
            //     name: '自动降赔'
            // },
            // {
            //     path: '/autoDrop2',
            //     component: resolve => require(['../page/strategy/autoDrop2'], resolve),
            //     iconCls: '',
            //     name: '新自动降赔'
            // },
            // {
            //     path: '/autoPolice',
            //     component: resolve => require(['../page/strategy/autoPolice'], resolve),
            //     iconCls: '',
            //     name: '自动报警'
            // },
            {
                path: '/ipBlacklist',
                component: resolve => require(['../page/strategy/ipBlacklist'], resolve),
                iconCls: '',
                name: 'IP黑名单'
            },
            // {
            //     path: '/duplicateAccount',
            //     component: resolve => require(['../page/userManagement/duplicateAccount'], resolve),
            //     iconCls: '',
            //     name: '重复账号'
            // }
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '用户',
        iconCls: 'iconfont icon-yonghuguanli',//图标样式class
        children: [
            {
                path: '/memberManagement',
                component: resolve => require(['../page/userManagement/memberManagement/memberManagement'], resolve),
                iconCls: '',
                name: '会员管理'
            },
            {
                path: '/memberHierarchy',
                component: resolve => require(['../page/userManagement/memberHierarchy'], resolve),
                iconCls: '',
                name: '会员等级'

            },
            {
                path: '/agentLink',
                component: resolve => require(['../page/agent/agentLink'], resolve),
                iconCls: '',
                name: '推广链接'
            },
            {
                path: '/memberHierarSet',
                component: resolve => require(['../components/memberHierarSet'], resolve),
                iconCls: '',
                name: '会员等级管理',
                hidden: true//不显示在导航中
            },
            {
                path: '/memberLabel',
                component: resolve => require(['../page/userManagement/memberLabel'], resolve),
                iconCls: '',
                name: '会员标签'
            },
            {
                path: '/idleAccount',
                component: resolve => require(['../page/userManagement/idleAccount'], resolve),
                iconCls: '',
                name: '闲置帐号'
            },
            {
                path: '/testPlay',
                component: resolve => require(['../page/userManagement/testPlay'], resolve),
                iconCls: '',
                name: '试玩帐号'
            },
            // {
            //     path: '/LoginAccount',
            //     component: resolve => require(['../page/userManagement/loginAccount'], resolve),
            //     iconCls: '',
            //     name: '登录查询'
            // },
            // {
            //     path: '/otherGameAccount',
            //     component: resolve => require(['../page/userManagement/otherGameAccount'], resolve),
            //     iconCls: '',
            //     name: '第三方游戏帐户'
            // },
            {
                path: '/agentAccount',
                component: resolve => require(['../page/userManagement/agentAccount/agentAccount'], resolve),
                iconCls: '',
                name: '代理管理'
            },
            {
                path: '/agentAudit',
                component: resolve => require(['../page/accountManagement/agentAudit'], resolve),
                iconCls: '',
                name: '代理审核'
            },
            {
                path: '/validUser',
                component: resolve => require(['../page/accountManagement/validUser'], resolve),
                iconCls: '',
                name: '有效用户'
            },
            // {
            //     path: '/otherMembers',
            //     component: resolve => require(['../page/accountManagement/otherMembers'], resolve),
            //     iconCls: '',
            //     name: '第三方会员查询'
            // },
            {
                path: '/childAccount',
                component: resolve => require(['../page/userManagement/childAccount'], resolve),
                iconCls: '',
                name: '管理员列表'
            },
            {
                path: '/childRoleAccount',
                component: resolve => require(['../page/userManagement/childRoleAccount'], resolve),
                iconCls: '',
                name: '管理员角色'
            },
            {
                path: '/effectiveBettingQuery',
                component: resolve => require(['../page/userManagement/effectiveBettingQuery'], resolve),
                iconCls: '',
                name: '有效投注查询'
            },

        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '注单',
        iconCls: 'iconfont icon-dingdan',//图标样式class
        children: [
            {
                path: '/chaseNumber',
                component: resolve => require(['../page/instantNote/chaseNumber'], resolve),
                iconCls: '',
                name: '追号记录'
            },
            {
                path: '/noteManagement',
                component: resolve => require(['../page/instantNote/noteManagement'], resolve),
                iconCls: '',
                name: '注单查询'
            },
            // {
            //     path: '/noteManagementNew',
            //     component: resolve => require(['../page/instantNote/noteManagementNew'], resolve),
            //     iconCls: '',
            //     name: '注单查询(新)'
            // },
            // {
            //     path: '/liveNote',
            //     component: resolve => require(['../page/instantNote/liveNote'], resolve),
            //     iconCls: '',
            //     name: 'LEBO视讯查询'
            // },
            {
                path: '/markSixQuery',
                component: resolve => require(['../page/instantNote/MarkSixQuery.vue'], resolve),
                iconCls: '',
                name: '六合彩投注查询'
            },
            {
                path: '/notePremiumTips',
                component: resolve => require(['../page/instantNote/notePremiumTips.vue'], resolve),
                iconCls: '',
                name: '红包小费',
                hidden: true
            }
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '现金',
        iconCls: 'iconfont icon-iconfontqian',//图标样式class
        children: [{
            path: '/bankManagement',
            component: resolve => require(['../page/cash/bankManagement'], resolve),
            iconCls: '',
            name: '银行管理'
        },
            {
                path: '/otherPayment',
                component: resolve => require(['../page/cash/otherPayment'], resolve),
                iconCls: '',
                name: '第三方支付平台'
            },
            {
                path: '/receivableBank',
                component: resolve => require(['../page/cash/receivableBank'], resolve),
                iconCls: '',
                name: '收款帐户'
            },
            {
                path: '/onLineReceipts',
                component: resolve => require(['../page/cash/onLineReceipts'], resolve),
                iconCls: '',
                name: '线上充值'
            },
            {
                path: '/offlineReceipts',
                component: resolve => require(['../page/cash/offlineReceipts'], resolve),
                iconCls: '',
                name: '公司入款'
            },
            {
                path: '/memberGetOut',
                component: resolve => require(['../page/cash/memberGetOut'], resolve),
                iconCls: '',
                name: '会员提现'
            },
            // {  与会员提现合并
            //     path: '/payment',
            //     component: resolve => require(['../page/statement/payment'], resolve),
            //     iconCls: '',
            //     name: '提现付款'
            // },
            {
                path: '/manual',
                component: resolve => require(['../page/cash/manual/manual_new'], resolve),
                iconCls: '',
                name: '人工存提'
            },
            {
                path: '/fundDetails',
                component: resolve => require(['../page/cash/fundDetails'], resolve),
                iconCls: '',
                name: '现金流水'
            },
            {
                path: '/transferRecord',
                component: resolve => require(['../page/cash/transferRecord'], resolve),
                iconCls: '',
                name: '转帐记录'
            },
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '佣金',
        iconCls: 'iconfont icon-yongjin',//图标样式class
        children: [
            // {
            //     path: '/commissionFeeset',
            //     component: resolve => require(['../page/agent/commissionFeeset'], resolve),
            //     iconCls: '',
            //     name: '退佣手续费'
            // },
            // {
            //     path: '/CommissionSet',
            //     component: resolve => require(['../page/agent/commissionSet'], resolve),
            //     iconCls: '',
            //     name: '代理退佣比例'
            // },
            // {
            //     path: '/agentSettlementSet',
            //     component: resolve => require(['../page/agent/agentSettlementSet'], resolve),
            //     iconCls: '',
            //     name: '退佣设定'
            // },
            // {
            //     path: '/RefundCommissionPeriod',
            //     component: resolve => require(['../page/agent/refundCommissionPeriod'], resolve),
            //     iconCls: '',
            //     name: '退佣期数'
            // },
            // {
            // 	path: '/RefundCommissionPeriod_child',
            // 	component: resolve => require(['../page/agent/refundCommissionPeriod_child'], resolve),
            // 	iconCls: '',
            // 	hidden: true,
            // 	name: '退佣期数'
            // },
            // {
            //     path: '/CommissionIncomeQuery',
            //     component: resolve => require(['../page/agent/commissionIncomeQuery'], resolve),
            //     iconCls: '',
            //     name: '退佣查询'
            // },
            // {
            //     path: '/subAgentRebate',
            //     component: resolve => require(['../page/agent/subAgentRebate'], resolve),
            //     iconCls: '',
            //     name: '下级佣金统计'
            // },
            // {
            //     path: '/agentDrawing',
            //     component: resolve => require(['../page/agent/agentDrawing'], resolve),
            //     iconCls: '',
            //     name: '代理提款'
            // },
            {
                path: '/agentRebate',
                component: resolve => require(['../page/agent/agentRebate'], resolve),
                iconCls: '',
                name: '代理退佣'
            }
            // {
            //     path: '/dailyWages',
            //     component: resolve => require(['../page/agent/dailyWages'], resolve),
            //     iconCls: '',
            //     name: '日工资管理'
            // }
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '报表',
        iconCls: 'iconfont icon-bingtu',//图标样式class
        children: [
            {
                path: '/sumStatement',
                component: resolve => require(['../page/statement/sumStatement'], resolve),
                iconCls: '',
                name: '总报表'
            },
            {
                path: '/agentLine',
                component: resolve => require(['../page/statement/agentLine'], resolve),
                iconCls: '',
                name: '团队收益报表'
            },
            {
                path: '/gameStatement',
                component: resolve => require(['../page/statement/gameStatement'], resolve),
                iconCls: '',
                name: '游戏报表'
            },
            // {
            //     path: '/PremiumTips',
            //     component: resolve => require(['../page/statement/PremiumTips'], resolve),
            //     iconCls: '',
            //     name: '红包小费',
            //     hidden: true
            // },
            {
                path: '/ZKCstatement',
                component: resolve => require(['../page/statement/ZKCstatement'], resolve),
                iconCls: '',
                name: '自开彩周期报表'
            },
            {
                path: '/deliveryStatement',
                component: resolve => require(['../page/statement/deliveryStatement'], resolve),
                iconCls: '',
                name: '交收表'
            },
            {
                path: '/deliveryDetail',
                component: resolve => require(['../page/statement/deliveryDetail'], resolve),
                iconCls: '',
                name: '交收详情',
                hidden: true//不显示在导航中

            },
            {
                path: '/fundDetailsSummary',
                component: resolve => require(['../page/statement/fundDetailsSummary'], resolve),
                iconCls: '',
                name: '出入款汇总'
            },
            {
                path: '/memberBalance',
                component: resolve => require(['../page/statement/memberBalance'], resolve),
                iconCls: '',
                name: '余额汇总'
            },
            {
                path: '/memberRanking',
                component: resolve => require(['../page/statement/memberRanking'], resolve),
                iconCls: '',
                name: '会员排名报表'
            },
        ]
    },
    {
        path: '/index',
        component: resolve => require(['../page/index/index'], resolve),
        name: '系统',
        iconCls: 'iconfont icon-xitongguanli1',//图标样式class
        children: [
            {
                path: '/sysLog',
                component: resolve => require(['../page/systemSettings/sysLog'], resolve),
                iconCls: '',
                name: '后台操作日志'
            },
            {
                path: '/operationLog',
                component: resolve => require(['../page/systemSettings/operationLog'], resolve),
                iconCls: '',
                name: '会员操作日志'
            },
            {
                path: '/logInfo',
                component: resolve => require(['../page/systemSettings/logInfo'], resolve),
                iconCls: '',
                name: '系统日志'
            },
            {
                path: '/fieldSettings',
                component: resolve => require(['../page/systemSettings/fieldSettings'], resolve),
                iconCls: '',
                name: '系统设置'
            },
            {
                path: '/emailList',
                component: resolve => require(['../page/systemSettings/emailList'], resolve),
                iconCls: '',
                name: '邮件管理'
            },
            {
                path: '/currencySettings',
                component: resolve => require(['../page/systemSettings/currencySettings'], resolve),
                iconCls: '',
                name: '货币设定'
            },
            {
                path: '/otherService',
                component: resolve => require(['../page/systemSettings/otherService'], resolve),
                iconCls: '',
                name: '第三方客服'
            },
            {
                path: '/emailSettings',
                component: resolve => require(['../page/systemSettings/emailSettings.vue'], resolve),
                iconCls: '',
                name: '邮件服务器'
            },
            {
                path: '/domainNameSet',
                component: resolve => require(['../page/systemSettings/domainNameSet.vue'], resolve),
                iconCls: '',
                name: '前台域名设置'
            },
            {
                path: '/domainNameManage',
                component: resolve => require(['../page/systemSettings/domainNameManage.vue'], resolve),
                iconCls: '',
                name: '后台域名管理'
            },
            {
                path: '/otherGamesAccounts',
                component: resolve => require(['../page/systemSettings/otherGamesAccounts.vue'], resolve),
                iconCls: '',
                name: '游戏后台帐号'
            }
        ]
    }

]
