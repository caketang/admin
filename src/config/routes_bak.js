export default [
    {
        path: '/login', //登录
        meta: {auth: false},
        component: () => import('../page/login/Login'),
        hidden: true//不显示在导航中
    },
    {
        path: '/init', //登录
        meta: {auth: false},
        component: () => import('../page/login/init'),
        hidden: true//不显示在导航中
    },
    {
        path: '/authorization', //总厅跳转授权
        meta: {auth: false},
        component: () => import('../page/login/authorization'),
        hidden: true//不显示在导航中
    },
    {
        path: '/setup',
        component: () => import('../page/setup/setup'),
        iconCls: '',
        name: '网站配置',
        hidden: true//不显示在导航中
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '默认首页',
        iconCls: '',//图标样式class,
        hidden: true,
        children: [{
            path: '/index',
            component: () => import('../page/index/indexEcharts'),
            name: '首页',
            iconCls: '',//图标样式class,
            hidden: true
        },
            {
                path: '/errorPage',
                component: () => import('../page/errorPage/errorPage'),
                name: 'error',
                iconCls: '',//图标样式class,
                hidden: true
            }]
    },
    //快捷导航
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '快捷',
        iconCls: 'iconfont icon-caidanguanli',//图标样式class,
        children: []
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '网站',
        iconCls: 'iconfont icon-dianpudanganwangzhan',//图标样式class,
        children: [
            {
                path: '/ADList',
                component: () => import('../page/webSet/ADList'),
                iconCls: '',
                name: '轮播广告'
            },
            {
                path: '/ADHome',
                component: () => import('../page/ADManage/ADHome'),
                iconCls: '',
                name: '文案管理'
            },
            {
                path: '/proxyCopy',
                component: () => import('../page/ADManage/proxyCopy'),
                iconCls: '',
                name: '代理文案'
            },
            {
                path: '/depositCopy',
                component: () => import('../page/ADManage/depositCopy'),
                iconCls: '',
                name: '存款文案'
            },
            {
                path: '/ckManage',
                component: () => import('../page/webSet/ckManage'),
                iconCls: '',
                name: '浮动图管理'
            },
            {
                path: '/promotionalResources',
                component: () => import('../page/webSet/promotionalResources'),
                name: '代理推广资源',
                iconCls: '',//图标样式class,
            },
            {
                path: '/registerSet',
                component: () => import('../page/webSet/registerSet'),
                name: '注册设置',
                iconCls: '',//图标样式class,
            },
            // {
            //     path: '/webSet',
            //     component: () => import('../page/webSet/webSet'),
            //     name: '站点设置',
            //     iconCls: '',//图标样式class,
            // },
            {
                path: '/sysMessage',
                component: () => import('../page/webSet/sysMessage'),
                name: '消息',
                iconCls: '',//图标样式class,
                hidden: true//不显示在导航中
            },
            {
                path: '/notice',
                component: () => import('../page/webSet/notice'),
                iconCls: '',
                name: '公告管理'
            },
            {
                path: '/msgManagement',
                component: () => import('../page/webSet/msgManagement.vue'),
                iconCls: '',
                name: '消息管理'
            },
            {
                path: '/resourcesManagement',
                component: () => import('../page/webSet/resourcesManagement'),
                iconCls: '',
                name: '资源站管理'
            }
        ]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '营销',
        iconCls: 'iconfont icon-yingxiao',//图标样式class
        children: [{
            path: '/apply',
            component: () => import('../page/preAct/apply'),
            iconCls: '',
            name: '优惠申请'
        },
            {
                path: '/typeList',
                component: () => import('../page/preAct/typeList'),
                iconCls: '',
                name: '优惠类型'
            },
            {
                path: '/activeSet',
                component: () => import('../page/preAct/activeSet'),
                iconCls: '',
                name: '优惠模板'
            },
            {
                path: '/addActiveSet',
                component: () => import('../page/preAct/addActiveSet.vue'),
                iconCls: '',
                name: '创建活动模板',
                hidden: true
            },
            {
                path: '/activeMode_1',
                component: () => import('../page/preAct/activeMode_1.vue'),
                iconCls: '',
                name: '每日签到模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_2',
                component: () => import('../page/preAct/activeMode_2.vue'),
                iconCls: '',
                name: '邮箱验证模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_3',
                component: () => import('../page/preAct/activeMode_3.vue'),
                iconCls: '',
                name: '手机验证模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_4',
                component: () => import('../page/preAct/activeMode_4.vue'),
                iconCls: '',
                name: '每日抽奖模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_5',
                component: () => import('../page/preAct/activeMode_5.vue'),
                iconCls: '',
                name: '救援金模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_6',
                component: () => import('../page/preAct/activeMode_6.vue'),
                iconCls: '',
                name: '擂台赛模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_7',
                component: () => import('../page/preAct/activeMode_7.vue'),
                iconCls: '',
                name: '奖上奖模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_8',
                component: () => import('../page/preAct/activeMode_8.vue'),
                iconCls: '',
                name: '连续闯关模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_9',
                component: () => import('../page/preAct/activeMode_9.vue'),
                iconCls: '',
                name: '存款优惠模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_10',
                component: () => import('../page/preAct/activeMode_10.vue'),
                iconCls: '',
                name: '注册优惠模板优惠设置',
                hidden: true
            },
            {
                path: '/activeMode_email',
                component: () => import('../page/preAct/activeMode_email.vue'),
                iconCls: '',
                name: '模板优惠设置(邮箱验证)',
                hidden: true
            },
            {
                path: '/contentManagement',
                component: () => import('../page/preAct/contentManagement'),
                iconCls: '',
                name: '手动优惠'
            },
            {
                path: '/discount',
                component: () => import('../page/preAct/discount'),
                iconCls: '',
                name: '返水活动'
            },
            {
                path: '/discountCondition',
                component: () => import('../page/preAct/discountCondition'),
                iconCls: '',
                name: '新增返水活动',
                hidden: true
            },
            {
                path: '/queryDetail',
                component: () => import('../page/preAct/queryDetail'),
                iconCls: '',
                name: '查询详情',
                hidden: true
            },
            {
                path: '/discountSetting',
                component: () => import('../page/preAct/discountSetting'),
                iconCls: '',
                name: '返水优惠设定'
            },
            {
                path: '/discountCounting',
                component: () => import('../page/preAct/discountCounting'),
                iconCls: '',
                name: '返水查询'
            },
            {
                path: '/discountDetail',
                component: () => import('../page/preAct/discountDetail'),
                iconCls: '',
                name: '返水活动详情',
                hidden: true
            },
            {
                path: '/memberDetail',
                component: () => import('../page/preAct/memberDetail'),
                iconCls: '',
                name: '会员返水详情',
                hidden: true
            }
        ]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '游戏',
        iconCls: 'iconfont icon-37750',//图标样式class
        children: [
            {
                path: '/lotteryModel',
                component: () => import('../page/lottey/lotteryModel'),
                iconCls: '',
                name: '彩票游戏模板'
            },
            {
                path: '/lotteryOdds',
                component: () => import('../page/lottey/lotteryOdds'),
                iconCls: '',
                name: '彩票赔率',
                hidden: true//不显示在导航中
            },
            {
                path: '/lotterInstantNote',
                component: () => import('../page/instantNote/lotterInstantNote'),
                iconCls: '',
                name: '彩票即时注单'
            },
            {
                path: '/lotterSingleNote',
                component: () => import('../page/lottey/lotterSingleNote'),
                iconCls: '',
                name: '彩票注单管理'
            },
            {
                path: '/lotterPeriodManagement',
                component: () => import('../page/lottey/lotterPeriodManagement'),
                iconCls: '',
                name: '彩票设定'
            },
            {
                path: '/lotterSort',
                component: () => import('../page/lottey/lotterSort'),
                iconCls: '',
                name: '彩票排序'
            },
            {
                path: '/lotteryResults',
                component: () => import('../page/lottey/lotteryResults'),
                iconCls: '',
                name: '开奖结果'
            },
            //自开彩
            {
                path: '/lotteryZKCseting',
                component: () => import('../page/lottey/lotteryZKCseting'),
                iconCls: '',
                name: '自开彩管理'
            },
            //手动开奖
            {
                path: '/lotteryZKCmanual',
                component: () => import('../page/lottey/lotteryZKCmanual'),
                iconCls: '',
                name: '自开彩手动开奖'
            },
            {
                path: '/lotteryZKCchange',
                component: () => import('../page/lottey/lotteryZKCchange'),
                iconCls: '',
                name: '自开彩控盘管理'
            },
            {
                path: '/lotteryZKCprophesy',
                component: () => import('../page/lottey/lotteryZKCprophesy'),
                iconCls: '',
                name: '自开彩预设彩果'
            },
            {
                path: '/lotteryZKClarge',
                component: () => import('../page/lottey/lotteryZKClarge'),
                iconCls: '',
                name: '自开彩大额投注'
            }]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '风控',
        iconCls: 'iconfont icon-shield',//图标样式class
        children: [
            // {
            //     path: '/strategy',
            //     component: () => import('../page/strategy/strategy'),
            //     iconCls: '',
            //     name: '注单监控'
            // },
            // {
            //     path: '/timeLimit',
            //     component: () => import('../page/strategy/timeLimit'),
            //     iconCls: '',
            //     name: '实时限号'
            // },
            // {
            //     path: '/autoDrop',
            //     component: () => import('../page/strategy/autoDrop'),
            //     iconCls: '',
            //     name: '自动降赔'
            // },
            // {
            //     path: '/autoDrop2',
            //     component: () => import('../page/strategy/autoDrop2'),
            //     iconCls: '',
            //     name: '新自动降赔'
            // },
            // {
            //     path: '/autoPolice',
            //     component: () => import('../page/strategy/autoPolice'),
            //     iconCls: '',
            //     name: '自动报警'
            // },
            {
                path: '/ipBlacklist',
                component: () => import('../page/strategy/ipBlacklist'),
                iconCls: '',
                name: 'IP黑名单'
            },
            // {
            //     path: '/duplicateAccount',
            //     component: () => import('../page/userManagement/duplicateAccount'),
            //     iconCls: '',
            //     name: '重复账号'
            // }
        ]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '用户',
        iconCls: 'iconfont icon-yonghuguanli',//图标样式class
        children: [
            {
                path: '/memberManagement',
                component: () => import('../page/userManagement/memberManagement/memberManagement'),
                iconCls: '',
                name: '会员管理'
            },
            {
                path: '/memberHierarchy',
                component: () => import('../page/userManagement/memberHierarchy'),
                iconCls: '',
                name: '会员等级'

            },
            {
                path: '/agentLink',
                component: () => import('../page/agent/agentLink'),
                iconCls: '',
                name: '推广链接'
            },
            {
                path: '/memberHierarSet',
                component: () => import('../components/memberHierarSet'),
                iconCls: '',
                name: '会员等级管理',
                hidden: true//不显示在导航中
            },
            {
                path: '/memberLabel',
                component: () => import('../page/userManagement/memberLabel'),
                iconCls: '',
                name: '会员标签'
            },
            {
                path: '/idleAccount',
                component: () => import('../page/userManagement/idleAccount'),
                iconCls: '',
                name: '闲置帐号'
            },
            {
                path: '/testPlay',
                component: () => import('../page/userManagement/testPlay'),
                iconCls: '',
                name: '试玩帐号'
            },
            // {
            //     path: '/LoginAccount',
            //     component: () => import('../page/userManagement/loginAccount'),
            //     iconCls: '',
            //     name: '登录查询'
            // },
            // {
            //     path: '/otherGameAccount',
            //     component: () => import('../page/userManagement/otherGameAccount'),
            //     iconCls: '',
            //     name: '第三方游戏帐户'
            // },
            {
                path: '/agentAccount',
                component: () => import('../page/userManagement/agentAccount/agentAccount'),
                iconCls: '',
                name: '代理管理'
            },
            {
                path: '/agentAudit',
                component: () => import('../page/accountManagement/agentAudit'),
                iconCls: '',
                name: '代理审核'
            },
            {
                path: '/validUser',
                component: () => import('../page/accountManagement/validUser'),
                iconCls: '',
                name: '有效用户'
            },
            // {
            //     path: '/otherMembers',
            //     component: () => import('../page/accountManagement/otherMembers'),
            //     iconCls: '',
            //     name: '第三方会员查询'
            // },
            {
                path: '/childAccount',
                component: () => import('../page/userManagement/childAccount'),
                iconCls: '',
                name: '管理员列表'
            },
            {
                path: '/childRoleAccount',
                component: () => import('../page/userManagement/childRoleAccount'),
                iconCls: '',
                name: '管理员角色'
            },
            {
                path: '/effectiveBettingQuery',
                component: () => import('../page/userManagement/effectiveBettingQuery'),
                iconCls: '',
                name: '有效投注查询'
            },

        ]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '注单',
        iconCls: 'iconfont icon-dingdan',//图标样式class
        children: [
            {
                path: '/chaseNumber',
                component: () => import('../page/instantNote/chaseNumber'),
                iconCls: '',
                name: '追号记录'
            },
            {
                path: '/noteManagement',
                component: () => import('../page/instantNote/noteManagement'),
                iconCls: '',
                name: '注单查询'
            },
            // {
            //     path: '/noteManagementNew',
            //     component: () => import('../page/instantNote/noteManagementNew'),
            //     iconCls: '',
            //     name: '注单查询(新)'
            // },
            // {
            //     path: '/liveNote',
            //     component: () => import('../page/instantNote/liveNote'),
            //     iconCls: '',
            //     name: 'LEBO视讯查询'
            // },
            {
                path: '/markSixQuery',
                component: () => import('../page/instantNote/MarkSixQuery.vue'),
                iconCls: '',
                name: '六合彩投注查询'
            },
            {
                path: '/notePremiumTips',
                component: () => import('../page/instantNote/notePremiumTips.vue'),
                iconCls: '',
                name: '红包小费',
                hidden: true
            }
        ]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '现金',
        iconCls: 'iconfont icon-iconfontqian',//图标样式class
        children: [{
            path: '/bankManagement',
            component: () => import('../page/cash/bankManagement'),
            iconCls: '',
            name: '银行管理'
        },
            {
                path: '/otherPayment',
                component: () => import('../page/cash/otherPayment'),
                iconCls: '',
                name: '第三方支付平台'
            },
            {
                path: '/receivableBank',
                component: () => import('../page/cash/receivableBank'),
                iconCls: '',
                name: '收款帐户'
            },
            {
                path: '/onLineReceipts',
                component: () => import('../page/cash/onLineReceipts'),
                iconCls: '',
                name: '线上充值'
            },
            {
                path: '/offlineReceipts',
                component: () => import('../page/cash/offlineReceipts'),
                iconCls: '',
                name: '公司入款'
            },
            {
                path: '/memberGetOut',
                component: () => import('../page/cash/memberGetOut'),
                iconCls: '',
                name: '会员提现'
            },
            // {  与会员提现合并
            //     path: '/payment',
            //     component: () => import('../page/statement/payment'),
            //     iconCls: '',
            //     name: '提现付款'
            // },
            {
                path: '/manual',
                component: () => import('../page/cash/manual/manual_new'),
                iconCls: '',
                name: '人工存提'
            },
            {
                path: '/fundDetails',
                component: () => import('../page/cash/fundDetails'),
                iconCls: '',
                name: '现金流水'
            },
            {
                path: '/transferRecord',
                component: () => import('../page/cash/transferRecord'),
                iconCls: '',
                name: '转帐记录'
            },
        ]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '佣金',
        iconCls: 'iconfont icon-yongjin',//图标样式class
        children: [
            // {
            //     path: '/commissionFeeset',
            //     component: () => import('../page/agent/commissionFeeset'),
            //     iconCls: '',
            //     name: '退佣手续费'
            // },
            // {
            //     path: '/CommissionSet',
            //     component: () => import('../page/agent/commissionSet'),
            //     iconCls: '',
            //     name: '代理退佣比例'
            // },
            // {
            //     path: '/agentSettlementSet',
            //     component: () => import('../page/agent/agentSettlementSet'),
            //     iconCls: '',
            //     name: '退佣设定'
            // },
            // {
            //     path: '/RefundCommissionPeriod',
            //     component: () => import('../page/agent/refundCommissionPeriod'),
            //     iconCls: '',
            //     name: '退佣期数'
            // },
            // {
            // 	path: '/RefundCommissionPeriod_child',
            // 	component: () => import('../page/agent/refundCommissionPeriod_child'),
            // 	iconCls: '',
            // 	hidden: true,
            // 	name: '退佣期数'
            // },
            // {
            //     path: '/CommissionIncomeQuery',
            //     component: () => import('../page/agent/commissionIncomeQuery'),
            //     iconCls: '',
            //     name: '退佣查询'
            // },
            // {
            //     path: '/subAgentRebate',
            //     component: () => import('../page/agent/subAgentRebate'),
            //     iconCls: '',
            //     name: '下级佣金统计'
            // },
            // {
            //     path: '/agentDrawing',
            //     component: () => import('../page/agent/agentDrawing'),
            //     iconCls: '',
            //     name: '代理提款'
            // },
            {
                path: '/agentRebate',
                component: () => import('../page/agent/agentRebate'),
                iconCls: '',
                name: '代理退佣'
            }
            // {
            //     path: '/dailyWages',
            //     component: () => import('../page/agent/dailyWages'),
            //     iconCls: '',
            //     name: '日工资管理'
            // }
        ]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '报表',
        iconCls: 'iconfont icon-bingtu',//图标样式class
        children: [
            {
                path: '/sumStatement',
                component: () => import('../page/statement/sumStatement'),
                iconCls: '',
                name: '总报表'
            },
            {
                path: '/agentLine',
                component: () => import('../page/statement/agentLine'),
                iconCls: '',
                name: '团队收益报表'
            },
            {
                path: '/gameStatement',
                component: () => import('../page/statement/gameStatement'),
                iconCls: '',
                name: '游戏报表'
            },
            // {
            //     path: '/PremiumTips',
            //     component: () => import('../page/statement/PremiumTips'),
            //     iconCls: '',
            //     name: '红包小费',
            //     hidden: true
            // },
            {
                path: '/ZKCstatement',
                component: () => import('../page/statement/ZKCstatement'),
                iconCls: '',
                name: '自开彩周期报表'
            },
            {
                path: '/deliveryStatement',
                component: () => import('../page/statement/deliveryStatement'),
                iconCls: '',
                name: '交收表'
            },
            {
                path: '/deliveryDetail',
                component: () => import('../page/statement/deliveryDetail'),
                iconCls: '',
                name: '交收详情',
                hidden: true//不显示在导航中

            },
            {
                path: '/fundDetailsSummary',
                component: () => import('../page/statement/fundDetailsSummary'),
                iconCls: '',
                name: '出入款汇总'
            },
            {
                path: '/memberBalance',
                component: () => import('../page/statement/memberBalance'),
                iconCls: '',
                name: '余额汇总'
            },
            {
                path: '/memberRanking',
                component: () => import('../page/statement/memberRanking'),
                iconCls: '',
                name: '会员排名报表'
            },
        ]
    },
    {
        path: '/index',
        component: () => import('../page/index/index'),
        name: '系统',
        iconCls: 'iconfont icon-xitongguanli1',//图标样式class
        children: [
            {
                path: '/sysLog',
                component: () => import('../page/systemSettings/sysLog'),
                iconCls: '',
                name: '后台操作日志'
            },
            {
                path: '/operationLog',
                component: () => import('../page/systemSettings/operationLog'),
                iconCls: '',
                name: '会员操作日志'
            },
            {
                path: '/logInfo',
                component: () => import('../page/systemSettings/logInfo'),
                iconCls: '',
                name: '系统日志'
            },
            {
                path: '/fieldSettings',
                component: () => import('../page/systemSettings/fieldSettings'),
                iconCls: '',
                name: '系统设置'
            },
            {
                path: '/emailList',
                component: () => import('../page/systemSettings/emailList'),
                iconCls: '',
                name: '邮件管理'
            },
            {
                path: '/currencySettings',
                component: () => import('../page/systemSettings/currencySettings'),
                iconCls: '',
                name: '货币设定'
            },
            {
                path: '/otherService',
                component: () => import('../page/systemSettings/otherService'),
                iconCls: '',
                name: '第三方客服'
            },
            {
                path: '/emailSettings',
                component: () => import('../page/systemSettings/emailSettings.vue'),
                iconCls: '',
                name: '邮件服务器'
            },
            {
                path: '/domainNameSet',
                component: () => import('../page/systemSettings/domainNameSet.vue'),
                iconCls: '',
                name: '前台域名设置'
            },
            {
                path: '/domainNameManage',
                component: () => import('../page/systemSettings/domainNameManage.vue'),
                iconCls: '',
                name: '后台域名管理'
            },
            {
                path: '/otherGamesAccounts',
                component: () => import('../page/systemSettings/otherGamesAccounts.vue'),
                iconCls: '',
                name: '游戏后台帐号'
            }
        ]
    }

]
