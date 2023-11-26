// 统一管理首页模块请求
import request from "@/utils/request";
// 通过枚举管理首页模块地址
enum API {
    // 获取已有的医院的数据接口
    HOSPITAL_URL='hosp/hospital/'
}

// 获取医院数据
export const reqHospital = (page: number, limit: number) => request.get<any>(API.HOSPITAL_URL + `${page}/${limit}`)
