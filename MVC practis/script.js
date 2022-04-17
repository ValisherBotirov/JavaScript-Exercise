import { state } from "./model";
// await getCountry("uzbekistan");
// console.log(state.data);

const getCountry = async function (number) {
  try {
    const dataJson = await fetch(
      `https://quranenc.com/api/translation/sura/uzbek_mansour/${number}`
    );
    const data = await dataJson.json();
    console.log(data);
  } catch (err) {
    alert(err);
  }
};

getCountry(2);
