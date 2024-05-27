export const sanitize = (data) =>{
   const {hashPassword,...sanitizeData} = data;
   return sanitizeData
}