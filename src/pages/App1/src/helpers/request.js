import { post } from '@zycfc/request';

const httpRequest = (url, option) => {
    // const promise=new Promise();
    option = !option || !option.data ? { data: {} } : option;
    return post(url, {
        data: option.data
    })
        .then(res => {
            return Promise.resolve(res);
        })
        .catch(e => {
            let message = {};
            switch (true) {
                case e.name === 'AbortError':
                    message = { returnCode: 'error', returnMsg: 'timeout' };
                    break;
                case e.name === 'StatusError':
                    message = {
                        returnCode: 'error',
                        returnMsg: `Wrong status code ${e.message}`
                    };
                    break;
                case !!e.returnCode:
                    message = {
                        returnCode: e.returnCode,
                        returnMsg: e.returnMsg
                    };
                    break;
            }
            return Promise.reject(message);
        });
};
exports.post = httpRequest;
