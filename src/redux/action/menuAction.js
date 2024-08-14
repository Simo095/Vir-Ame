export const ADD_MENU = "ADD_MENU";
export const ADD_WARD = "ADD_WARD";
export const NOT_FOUND = "NOT_FOUND";
export const UPDATE_MENU = "UPDATE_MENU";
export const addMenuOnStore = menuArray => ({
  type: ADD_MENU,
  payload: menuArray
});
export const addWardOnStore = wardArray => ({
  type: ADD_WARD,
  payload: wardArray
});
export const notFound = condition => ({
  type: NOT_FOUND,
  payload: condition
});

export const updateMenu = menuData => ({
  type: UPDATE_MENU,
  payload: menuData
});

export const fetchMenuActionBlob = () => {
  return async dispatch => {
    try {
      const ListBlobMenu = await fetch(`https://vir-ame.vercel.app/api/get`, {
        method: "GET"
      });

      if (ListBlobMenu.ok) {
        dispatch(notFound(false));
        const menuJson = await ListBlobMenu.json();
        const menuFiltered = menuJson
          .filter(file => file.pathname.includes(`am`))
          .reduce((latest, current) => {
            return new Date(current.uploadedAt) > new Date(latest.uploadedAt) ? current : latest;
          }, menuJson[0]);
        if (!menuFiltered) throw new Error("file non trovato!" + menuFiltered);

        // const lastMenuInsert = menuJson.reduce((latest, current) => {
        //   return new Date(current.uploadedAt) > new Date(latest.uploadedAt) ? current : latest;
        // }, menuJson[0]);

        const response = await fetch(menuFiltered.url);
        const objMenuResponse = await response.json();

        const sortedDishes = [...objMenuResponse].sort((a, b) => a.ward.id - b.ward.id);
        dispatch(addMenuOnStore(sortedDishes));
        const newUniqueElements = {};
        for (const item of objMenuResponse) {
          if (!newUniqueElements[item.ward.id]) {
            newUniqueElements[item.ward.id] = item;
          }
        }
        const rep = Object.values(newUniqueElements);
        dispatch(addWardOnStore(rep));
      } else {
        const errorMessage = await ListBlobMenu.text();
        dispatch(notFound(true));
        throw new Error(errorMessage);
      }
      return true;
    } catch (error) {
      dispatch(notFound(true));
      return false;
    }
  };
};

export const checkMenuBlob = () => {
  return async dispatch => {
    try {
      const ListBlobMenu = await fetch(`https://vir-ame.vercel.app/api/get`, {
        method: "GET"
      });
      if (ListBlobMenu.ok) {
        dispatch(notFound(false));
        const menuJson = await ListBlobMenu.json();
        const menuFiltered = menuJson
          .filter(file => file.pathname.startsWith(`am`))
          .reduce((latest, current) => {
            return new Date(current.uploadedAt) > new Date(latest.uploadedAt) ? current : latest;
          }, menuJson[0]);
        if (!menuFiltered) throw new Error("file non trovato!" + menuFiltered);

        // const lastMenuInsert = menuJson.reduce((latest, current) => {
        //   return new Date(current.uploadedAt) > new Date(latest.uploadedAt) ? current : latest;
        // }, menuJson[0]);

        const response = await fetch(menuFiltered.url);
        const objMenuResponse = await response.json();
        const sortedDishes = [...objMenuResponse].sort((a, b) => a.ward.id - b.ward.id);
        dispatch(addMenuOnStore(sortedDishes));
      } else {
        const errorMessage = await ListBlobMenu.text();
        console.log(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

[
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/am-LJlPKwL3Nfp4fUP98cCwDNJMn8KjxA.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/am-LJlPKwL3Nfp4fUP98cCwDNJMn8KjxA.json?download=1",
    pathname: "am.json",
    size: 9973,
    uploadedAt: "2024-08-05T15:13:18.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/am-sLgJl3ubrTNFPMI8LRu5Yk7LfjUT63.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/am-sLgJl3ubrTNFPMI8LRu5Yk7LfjUT63.json?download=1",
    pathname: "am.json",
    size: 9975,
    uploadedAt: "2024-08-06T12:07:00.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/am-yr0ibCUGNm0KTHAu29Rk85X9byMVlF.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/am-yr0ibCUGNm0KTHAu29Rk85X9byMVlF.json?download=1",
    pathname: "am.json",
    size: 2152,
    uploadedAt: "2024-07-25T04:08:17.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-6Ee7Am1kPBUG9Ufd52VAwTqVxVZqP0.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-6Ee7Am1kPBUG9Ufd52VAwTqVxVZqP0.json?download=1",
    pathname: "gc.json",
    size: 4368,
    uploadedAt: "2024-07-30T16:38:49.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-92SRRMae7f5pNHa9f9a4KYtkhGrt0B.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-92SRRMae7f5pNHa9f9a4KYtkhGrt0B.json?download=1",
    pathname: "gc.json",
    size: 4391,
    uploadedAt: "2024-07-31T11:00:36.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-93wAUnSaElvdv9w1zKfUo63cvLUPqB.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-93wAUnSaElvdv9w1zKfUo63cvLUPqB.json?download=1",
    pathname: "gc.json",
    size: 4288,
    uploadedAt: "2024-07-31T10:58:48.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-Ape5EscvFLo97eczT0EBOtcjapnY2S.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-Ape5EscvFLo97eczT0EBOtcjapnY2S.json?download=1",
    pathname: "gc.json",
    size: 7030,
    uploadedAt: "2024-07-31T11:08:23.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-IfXXZ3r7gESlJLefamSRKdLG2TVMmH.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-IfXXZ3r7gESlJLefamSRKdLG2TVMmH.json?download=1",
    pathname: "gc.json",
    size: 3871,
    uploadedAt: "2024-07-30T16:27:25.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-JVvqf44BCtHwYs9lYIDoZwW3noDHCg.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-JVvqf44BCtHwYs9lYIDoZwW3noDHCg.json?download=1",
    pathname: "gc.json",
    size: 4276,
    uploadedAt: "2024-07-30T17:08:21.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-KbtyHORb2ejNVlAbkz5IwvtZsy4l3E.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-KbtyHORb2ejNVlAbkz5IwvtZsy4l3E.json?download=1",
    pathname: "gc.json",
    size: 7131,
    uploadedAt: "2024-07-31T11:16:16.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-N3zybhmVjq9ucyoOTLeq13ZdESVVhA.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-N3zybhmVjq9ucyoOTLeq13ZdESVVhA.json?download=1",
    pathname: "gc.json",
    size: 6334,
    uploadedAt: "2024-07-30T14:00:58.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-N8q2nZD1M3VQPH0OkG4WB22Jyw4fBr.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-N8q2nZD1M3VQPH0OkG4WB22Jyw4fBr.json?download=1",
    pathname: "gc.json",
    size: 8620,
    uploadedAt: "2024-07-30T16:06:39.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-NNcVDUKr3njBBKlAcMXMYpAhZg44E9.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-NNcVDUKr3njBBKlAcMXMYpAhZg44E9.json?download=1",
    pathname: "gc.json",
    size: 3576,
    uploadedAt: "2024-07-30T16:26:18.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-OonTGycLeFw6xXU2b2B376hRxMRhtg.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-OonTGycLeFw6xXU2b2B376hRxMRhtg.json?download=1",
    pathname: "gc.json",
    size: 4288,
    uploadedAt: "2024-07-31T10:57:25.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-QekHUKFkvJZ3RJcRJfLwPe3yu7yyw8.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-QekHUKFkvJZ3RJcRJfLwPe3yu7yyw8.json?download=1",
    pathname: "gc.json",
    size: 3963,
    uploadedAt: "2024-07-30T16:32:13.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-cguF7m8Bj6lEh9imnTMImF9646FpS8.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-cguF7m8Bj6lEh9imnTMImF9646FpS8.json?download=1",
    pathname: "gc.json",
    size: 4276,
    uploadedAt: "2024-07-30T19:51:34.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-dZifLnZQkMnb7BmY4mJ4nSV1Td58Hy.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-dZifLnZQkMnb7BmY4mJ4nSV1Td58Hy.json?download=1",
    pathname: "gc.json",
    size: 8620,
    uploadedAt: "2024-07-30T16:01:36.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-eMmQm1Hfbrs9WG0HHNAhGY9m0Hq77d.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-eMmQm1Hfbrs9WG0HHNAhGY9m0Hq77d.json?download=1",
    pathname: "gc.json",
    size: 8408,
    uploadedAt: "2024-07-30T16:09:36.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-fKu85wRlp9IlYgDVkVH7miOcU7vcvW.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-fKu85wRlp9IlYgDVkVH7miOcU7vcvW.json?download=1",
    pathname: "gc.json",
    size: 3060,
    uploadedAt: "2024-07-30T16:13:15.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-hYaZ2MIpCojK1c44YeFpo3febokFm9.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-hYaZ2MIpCojK1c44YeFpo3febokFm9.json?download=1",
    pathname: "gc.json",
    size: 3954,
    uploadedAt: "2024-07-30T16:36:27.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-ku0Go7tuqRepAfXAw1QnJ7IxfL7rFK.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-ku0Go7tuqRepAfXAw1QnJ7IxfL7rFK.json?download=1",
    pathname: "gc.json",
    size: 3963,
    uploadedAt: "2024-07-30T16:28:16.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-llRrIFvEYHZrEbHVfqVGe9h3jWSFBA.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-llRrIFvEYHZrEbHVfqVGe9h3jWSFBA.json?download=1",
    pathname: "gc.json",
    size: 3480,
    uploadedAt: "2024-07-30T16:23:46.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-ptGlm7xZEmDZgDgDi4ypFPL2e1NUOq.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-ptGlm7xZEmDZgDgDi4ypFPL2e1NUOq.json?download=1",
    pathname: "gc.json",
    size: 7033,
    uploadedAt: "2024-07-31T11:24:11.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-yxiZ7V7Z792jAFjm105sfvZxc8GXMd.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/gc-yxiZ7V7Z792jAFjm105sfvZxc8GXMd.json?download=1",
    pathname: "gc.json",
    size: 7129,
    uploadedAt: "2024-07-31T11:13:00.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/menu-0s1y0Ho5swkiNl3OMHliGZWlvhfy9B.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/menu-0s1y0Ho5swkiNl3OMHliGZWlvhfy9B.json?download=1",
    pathname: "menu.json",
    size: 3390,
    uploadedAt: "2024-07-21T21:24:41.000Z"
  },
  {
    url: "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/menu-4o3xbmbjeAk2CxcY8bXjfoo8MVchto.json",
    downloadUrl:
      "https://j36y2kkbqeaan2jq.public.blob.vercel-storage.com/menu-4o3xbmbjeAk2CxcY8bXjfoo8MVchto.json?download=1",
    pathname: "menu.json",
    size: 3390,
    uploadedAt: "2024-08-02T19:33:35.000Z"
  }
];
