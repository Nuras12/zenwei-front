
interface Sort {
    sortField: string | null
    sortOrder: 'ASC' | 'DESC' | null
}

interface Pagination {
    pageSize: number
    pageNumber: number
}

export interface FilterRequest {

    filter: {
        grant: string | null
        cityName: string | null
        programName: string | null
        language: string | null
        universityId: number | null
        degree: string | null
        season: string | null
        scholarship: {
            accommodation: string | null
            livingExpense: string | null
        }
    },
    sort: Sort
    pagination: Pagination
}