import { useHostFiltersStore } from '../../stores/useHostFiltersStore';
import './HostSearchForm.css';

function HostSearchForm() {
    const filters = useHostFiltersStore((state) => state.filters);
    const setFilter = useHostFiltersStore((state) => state.setFilter);
    const resetFilters = useHostFiltersStore((state) => state.resetFilters);

    return (
        <div className="host-filters">

            <label> Start date:
                <input type="date"
                       value={filters.startDate}
                       onChange={(event) =>
                           setFilter('startDate', event.target.value)}/>
            </label>

            <label> End date:
                <input type="date"
                       value={filters.endDate}
                       onChange={(event) =>
                           setFilter('endDate', event.target.value)}/>
            </label>

            <button type="button" onClick={resetFilters}>Reset filters</button>
        </div>
    );
}

export default HostSearchForm;