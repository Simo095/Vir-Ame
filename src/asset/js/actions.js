export const fetchImage = async (setLogo) => {
  const requestLogo = await fetch(`menus/logo.png`, {
    method: "GET",
  });
  if (requestLogo.ok) {
    const blobData = await requestLogo.blob();
    const blobURL = URL.createObjectURL(blobData);
    setLogo(blobURL);
  }
};
export const fetchName = async (setName) => {
  const requestname = await fetch(`menus/name.txt`, {
    method: "GET",
  });
  if (requestname.ok) {
    const name = await requestname.text();
    setName(name);
  }
};
