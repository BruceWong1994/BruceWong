/*
 * action 类型
 */

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

/*
 * action 创建函数
 */

 export function todo(type, act) {
     return { type, act }
 }
