import { Dna} from 'react-loader-spinner'
import  {Wrap}  from './Spinner.Styled';

export const Spinner = () => {
    return (
        <Wrap>
             <Dna ariaLabel="DNA-loadin" />
        </Wrap>
    )
}
