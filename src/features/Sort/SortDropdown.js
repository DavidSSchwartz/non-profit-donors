import { useDispatch } from 'react-redux';
import { sort } from '../panes/panesSlice';

const SortDropdown = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <span>
                Order by:
            </span>
            <select
                onChange = {(e) => dispatch(sort(e.target.value))}
            >
                <option value = "recent">
                    Recent
                </option>
                <option value = "alph">
                    Alphabetical
                </option>
                <option value = "highest">
                    Highest
                </option>
                <option value = "lowest">
                    Lowest
                </option>
            </select>
        </div>
    )
}

export default SortDropdown;
