const Content = {
  inputsPersonalData: [
    {
      label: "Nama Lengkap",
      name: "nama",
      type: "text",
      error: "this field is required",
    },
    {
      error: "email must conating '@' ",
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      error: "this field is required",
      label: "Tempat Lahir",
      name: "tempatLahir",
      type: "text",
    },
    {
      error: "this field is required",
      label: "Tanggal Lahir",
      name: "tglLahir",
      type: "date",
    },
  ],
  inputsEducations: [
    {
      error: "this field is required",
      label: "Jenjang",
      name: "jenjang",
      type: "text",
    },
    {
      error: "this field is required",
      label: "Nama Sekolah",
      name: "namaSekolah",
      type: "text",
    },
    {
      error: "this field is required",
      label: "Tahun Masuk",
      name: "masuk",
      type: "number",
    },
    {
      error: "this field is required",
      label: "Tahun Lulus",
      name: "lulus",
      type: "number",
    },
  ],
  inputsExperience: [
    {
      error: "this field is required",
      label: "Nama Kantor",
      name: "kantor",
      type: "text",
    },
    {
      error: "this field is required",
      label: "Bidang Usaha",
      name: "bidangUsaha",
      type: "text",
    },
    {
      error: "this field is required",
      label: "Tahun Masuk",
      name: "tahunMasuk",
      type: "number",
    },
    {
      error: "this field is required",
      label: "Tahun Keluar",
      name: "tahunKeluar",
      type: "number",
    },
  ],
};

export default Content;
