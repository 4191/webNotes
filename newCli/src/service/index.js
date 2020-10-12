//请求函数,例子为下载后端返回的数据流
import request from './request';

export const reqDownloadExcel = (data) =>
    request('/_api/downloadExcel', data, 'POST', { responseType: 'blob' });

//之后在调用请求函数的文件中使用file-saver处理，例如
// const downloadExcel = async () => {
//     const result = await reqDownloadExcel();
//     const blob = new Blob([result]);
//     const blobUrl = window.URL.createObjectURL(blob);
//     saveAs(blobUrl, `逻辑方程模板.xlsx`);
//     window.URL.revokeObjectURL(blobUrl);
// };

//POST 请求url传参,在配置项中填写，uuid即是值，也是拼串的字段
export const reqDownload = (data, uuid) =>
    request('/_api/downloadExcel', data, 'POST', {
        responseType: 'blob',
        params: {
            uuid,
        },
    });

//----------------------------------------------------------------
export const reqData = () => request('/_api/getData');
