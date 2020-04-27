import APIs from '../constants/APIs';
// import { post } from '@zycfc/request';
import { post } from './request';

const APIHelper = {
    // 上传APP数据
    addData(data) {
        return post(APIs.addData, {
            data
        });
    },
    getAPPs(data) {
        return post(APIs.getAPPs, {
            data
        });
    }
};

export default APIHelper;
