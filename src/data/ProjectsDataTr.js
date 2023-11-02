import Calculator from "../assets/calculator.png";
import Filmler from "../assets/filmlist.jpg";
import TaskYonetimi from "../assets/taskyonetimi.png";
export const projectsDataTr = () => {
  return [
    {
      id: 1,
      img: Calculator,
      title: "Hesap Makinesi Projesi",
      description:
        "Sayıları istenilen sırayla toplayabilen, çarpan, çıkarabilen ve bölebilen bir hesap makinesi uygulamasıdır. Ayrıca bellek kaydetme ve geri çağırma özellikleri de bulunmaktadır.",
      methodsofproject: ["node.js", "react"],
      githubLink: "https://github.com/Sdurak/fsweb-s10g1-reducer-calculator",
      deployLink: "https://calculator-hesaplama.netlify.app/",
    },
    {
      id: 2,
      img: Filmler,
      title: "Filmler",
      description:
        "Küçük bir film veritabanını içeren web uygulaması. Bu uygulama, filmleri ekleyebileceğiniz, satın alabileceğiniz veya satın almaktan vazgeçebileceğiniz bir uygulamadır. Kart ile ödeme yapma seçeneği bulunmaktadır.",
      methodsofproject: ["react", "redux", "tailwindcss"],
      githubLink: "https://github.com/Sdurak/fsweb-s10g3-redux-watchlist",
      deployLink: "https://filmslists.netlify.app/",
    },
    {
      id: 3,
      img: TaskYonetimi,
      title: "Görev Yönetimi",
      description:
        "Görev takip sistemleri, bir projede yapılması gereken şeyleri küçük görevlere böldüğümüz ve bu görevleri yapması gereken kişileri eklediğimiz projelerdir.",
      methodsofproject: ["react", "redux", "yup", "react toastify"],
      githubLink: "https://github.com/Sdurak/fsweb-s9g1-task-yonetimi",
      deployLink: "https://task-yonetimi.netlify.app/",
    },
  ];
};
