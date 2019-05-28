class FileUploadController {

  static async uploadFile(ctx) {
    const excelFiles = ['xls', 'xlsx'];
    const jsonFiles = ['json'];

    if (ctx.request.files) {
      const file = ctx.request.files.file;
      const ext = file.name.split('.').pop();
      if (excelFiles.includes(ext)) {
        // parse excel
        
      } else if (jsonFiles.includes(ext)) {
        //parse json

      }
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: "upload success"
      };
    } else {

    }
  }
}

module.exports = FileUploadController;
