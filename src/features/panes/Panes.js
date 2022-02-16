import { useSelector } from 'react-redux';
import { selectSearchQuery } from '../search/searchSlice';
import { selectPanes } from './panesSlice';

const Panes = () => {
    const panes = useSelector(selectPanes);
    const searchQuery = useSelector(selectSearchQuery);
    const filteredPanes = panes.filter(pane => pane.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const panesDisplay = filteredPanes.map((pane, index) => {
                            return (
                                <div 
                                    key = {index}
                                    className = "pane flex-column-center"
                                >
                                    <div className = "pane-basic-info flex-column-center">
                                        <div className = "pane-amount">
                                            ${pane.amount}
                                        </div>
                                        <div className = "pane-name">
                                            {pane.name}
                                        </div>
                                    </div>
                                    <div className="pane-extra-info">
                                        {pane.donatedBy && `Donation through ${pane.donatedBy}`}
                                    </div>
                                </div>
                            )
                        });

    const noResults = <p>There are no results for your search</p>;

    return (
        <>
            {panesDisplay.length > 0 ? panesDisplay : noResults}
        </>
    )
}

export default Panes;
