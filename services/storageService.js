const supabase = require("../supabase/supabaseClient.js");

async function downloadFile(bucket, fileName) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .download(fileName);

  if (error) throw error;

  const buffer = await data.arrayBuffer();

  return Buffer.from(buffer);
}

async function uploadFile(bucket, fileName, fileBuffer) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, fileBuffer);
  if (error) throw error;
  return data;
}

module.exports = {
  downloadFile,
  uploadFile,
};
