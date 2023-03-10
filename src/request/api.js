import request from "./request";
//登录
export function login(user) {
    // console.log(user);
    return request.get(`/administrator-entity/login/${user.username},${user.password}`, user)
}
//注册 
export function register(user) {
    console.log(user);
    return request.post('/register', user)
}
//获取管理员信息
export function getAdminInfo(user) {
    console.log(user);
    return request.get(`/administrator-entity/getAdministratorByUsername/${user.userName}`, user)
}
//获取所有学员信息
export function getStuInfo() {
    // console.log(user);
    return request.post(`/student-info-entity/getAllStudentInfo`)
}
export function delStuInfo(user) {
    return request.get(`student-info-entity/deleteStudentById/${user.id}`, user)
    // console.log(`/administrator-entity//student-info-entity/deleteStudentById/${user.id}`);
}
export function addStuInfo(user) {
    // console.log(user);
    return request.post(`/student-info-entity/insertStudentInfo`, user)
}
export function updateStuInfo(user) {
    // console.log(user.sizeForm);
    return request.post('/student-info-entity/updateStudent', user.sizeForm)
}
export function findStuById(user) {
    return request.get(`/student-info-entity/findStudentByStuNumber/${user.stuId}`, user)
}
export function registerAdmin(user) {
    // console.log(user);
    return request.post(`/administrator-entity/register`, user)
}
export function searchStuByName(user) {
    // console.log(user.stuName);
    return request.get(`/student-info-entity/findStudentByStuName/${user.stuName}`, user)
}
export function modifyAdminInfo(user) {
    return request.post('/administrator-entity/modifyAdministratorInfo', user.adminInfo)
}

export function getAllAuditInfo() {
    return request.get('/stu-to-auditor-entity/getAllAuditorInfo')
}
export function SubmitModifyAudit(user) {
    return request.get(`audit-table-entity/changePermissionById/${user.id},${user.userId}`, user)
}
export function sendEmailToUser(user) {
    return request.get(`/audit-table-entity/sendEmailToUser/${user.id}`, user)
}
export function updatePwd(user) {
    console.log(user.sizeForm.userId);
    return request.get(`/administrator-entity/modifyPassword/${user.sizeForm.userId},${user.sizeForm.newPwd}`, user)
}