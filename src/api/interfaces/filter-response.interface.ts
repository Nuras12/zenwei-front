import type { Language } from "./language.enum"

interface Sort {
    sortField?: string
    sortOrder?: 'ASC' | 'DESC'
}

interface ResponsePagination {
    currentPage: number
    totalItems: number
    totalPages: number
}

interface UniversityDetails {
    program: string
    language: string
    startDate: string
    scholarship: {
        accommodation: boolean
        livingExpense: boolean
    },
    price: {
        tuition: number
        accommodationMin: number
        accommodationMax: number
        livingExpenseMin: number
        livingExpenseMax: number
    }
}

interface University {
    id: number
    name: string
    city: string
    details: UniversityDetails
}

export interface FilterResponse {

    activeFilters: {
        grant: null,
        cityName: null,
        programName: null,
        language: Language | null,
        universityId: null,
        degree: 'Master',
        season: 'Fall',
        scholarship: {
            accommodation: null,
            livingExpense: null
        }
    },
    sort: Sort
    pagination: ResponsePagination
    universities: University[]
}
