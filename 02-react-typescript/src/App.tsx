import { BasicType } from "./typescript-react-tutorial/BasicType";
import { FC1, FC2, FC3 } from "./typescript-react-tutorial/FunctionComponents";

export const App: React.FC = () => {
   return (
      <div>
         <BasicType />
         <FC1 message='Function Components 1' />
         <FC2 message='Function Components 2' />
         <FC3 message='Function Components 3' />
      </div>
   );
};
