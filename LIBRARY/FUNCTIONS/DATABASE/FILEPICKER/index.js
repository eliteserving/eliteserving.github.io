export const FILEPICKER = (HOLDER, CALLBACK) => {
  CLICK(HOLDER, () => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";

    input.onchange = () => {
      const file = input.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        const rawPath = input.value || file.name;
        const path = rawPath.replace(/\\/g, "/");
        const base64 = reader.result.split(",")[1];

        CALLBACK({
          name: file.name,
          type: file.type,
          size: file.size,
          path: path,
          data: base64
        });
      };

      reader.readAsDataURL(file);
    };

    input.click();
  });
};