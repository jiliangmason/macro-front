/*
 * @Description: 
 * @version: 
 * @Company: zycfc
 * @Author: 杨伊乐
 * @Date: 2019-03-21 10:38:29
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2019-10-16 10:41:28
 */
const HOST = {
    dev: {
        api: 'https://sit3.hnzycfc.com/platformServer', // 开发环境
        user: 'https://apisit.hnzycfc.com/userCenterH5',
        // ucard: 'https://apisit.hnzycfc.com/ucardH5',
        ucard: 'https://apikf.hnzycfc.com/transData',
        activity: 'https://apikf.hnzycfc.com/activity',
        JsonDistrict: 'https://sit2.hnzycfc.com/json/district.json'
    },
    sit: {
        api: 'https://sit3.hnzycfc.com/platformServer', // 内部测试环境
        user: 'https://apisit.hnzycfc.com/userCenterH5',
        // ucard: 'https://apisit.hnzycfc.com/transData',
        // activity: 'https://apisit.hnzycfc.com/loanmarket-api',
        ucard: 'https://apizb.hnzycfc.com/transData',
        activity: 'https://apizb.hnzycfc.com/loanmarket-api',
        JsonDistrict: 'https://sit2.hnzycfc.com/json/district.json'
    },
    uat: {
        api: 'https://sit3.hnzycfc.com/platformServer', // 用户测试环境
        user: 'https://apiuat.hnzycfc.com/userCenterH5',
        ucard: 'https://apiuat.hnzycfc.com/ucardH5',
        activity: 'https://apiuat.hnzycfc.com/loanmarket-api',
        // ucard: 'https://apizb.hnzycfc.com/transData',
        // activity: 'https://apizb.hnzycfc.com/loanmarket-api',
        JsonDistrict: 'https://sit2.hnzycfc.com/json/district.json'
    },
    prod: {
        api: 'https://wx.hnzycfc.com/platformServer', // 生产环境
        user: 'https://api.hnzycfc.com/userCenterH5',
        ucard: 'https://api.hnzycfc.com/transData', //贷款集市接口链接
        activity: 'https://api.hnzycfc.com/loanmarketApi',
        JsonDistrict: 'https://s.hnzycfc.com/json/district.json'
    }
};

const env = HOST[__SERVER_ENV__];

const APIs = {
    addData: `${env.ucard}/api/h5/anon/addData`,
    getAPPs: `${env.activity}/api/h5/anon/getAllOnline`
};

export default {
    ...APIs
};
