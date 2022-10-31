// Props tipi
type FCProps = {
   message: string;
};

// En kolay kullanım
export const FC1 = ({ message }: FCProps) => {
   return (
      <div>
         <div>{message}</div>
      </div>
   );
};

// kullanım 2
export const FC2 = ({ message }: FCProps): JSX.Element => {
   return (
      <div>
         <div>{message}</div>
      </div>
   );
};

// kullanım 3
export const FC3 = ({ message }: { message: string }) => {
   return (
      <div>
         <div>{message}</div>
      </div>
   );
};
