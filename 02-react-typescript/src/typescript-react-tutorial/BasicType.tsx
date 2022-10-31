type appProp = {
   // Yazı - Örk: message = "Message text"
   message: string;

   // Sayı - Örk: count = 23
   count: number;

   // True, false - Örk: disable = true
   disable: boolean;

   // opsiyonel değişken
   optional?: string;

   // Sadece string içeren dizi - Örk: names = ["JavaScript","TypeScript","React"]
   names: string[];

   // Sadece belirtilen değerleri alabilir - Örk: status = "warning", status = "success"
   status: "warning" | "success";

   // Obje - örk: obj = {id:1,"Baslik"}
   obj: {
      id: number;
      title: string;
   };

   // obje dizisi - örk: obj = [{ id: 1, title: "Baslik 1" },{ id: 2, title: "Baslik 2" },]
   objArr: {
      id: number;
      title: string;
   }[];

   // ilkel olmayan değer tutar
   obj2: object;

   // Key tipini belirleme - örk: dict1 = { text:23 }, Hatalı - dict1 = { 123:23 }
   dict1: {
      [key: string]: number;
   };

   // dict1 kullanımı ile aynı
   dict2: Record<string, number>;

   // Veri almayan fonksiyon
   aFn: () => void;

   // Sadece sayı parametresi alan fonksiyon
   bFn: (id: number) => void;

   // event döndüren fonksiyon
   cFn: (event: React.ChangeEvent<HTMLInputElement>) => void;

   // event döndüren fonksiyon (alternatif)
   onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

export const BasicType = () => {
   return <div>BasicType</div>;
};
