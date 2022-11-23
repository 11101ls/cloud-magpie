import request from "@/utils/request"
// 登录
export const login = (
  data: UserRegisterInfo
): Promise<MyResponseData<{ token: string }>> =>
  request({
    url: "/v1/auth/login",
    method: "post",
    data,
  })
// 登录
export const login2 = (data: UserRegisterInfo): Promise<MyResponseData<any>> =>
  request({
    url: "/v1/user",
    method: "post",
    data,
  })

export const token = (params = {}): Promise<MyResponseData<any>> =>
  request({
    url: "/v1/auth/cd",
    method: "get",
    params,
  })
