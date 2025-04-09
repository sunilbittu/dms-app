'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

interface Company {
    id: number;
    name: string;
}

type ViewMode = 'tiles' | 'list' | 'table';

export default function CompaniesPage() {
    const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
    const [viewMode, setViewMode] = useState<ViewMode>('tiles');
    const { setSelectedCompany: setAuthCompany } = useAuth();
    const router = useRouter();

    const companies: Company[] = [
        { id: 1, name: 'Datadot' },
        { id: 2, name: 'Company B' },
        { id: 3, name: 'Company C' },
    ];

    const handleCompanySelect = (companyId: number) => {
        setSelectedCompany(companyId);
        setAuthCompany(companyId);
        router.push('/inbox');
    };

    const renderTilesView = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-oid="t79ucgh">
            {companies.map((company) => (
                <div
                    key={company.id}
                    className={`p-6 border rounded-lg cursor-pointer transition-all ${
                        selectedCompany === company.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleCompanySelect(company.id)}
                    data-oid="ephsf.1"
                >
                    <div className="flex flex-col items-center" data-oid="rgntji.">
                        <h2 className="text-lg font-medium" data-oid="tls0m7z">
                            {company.name}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderListView = () => (
        <div className="space-y-4" data-oid="hty9kyk">
            {companies.map((company) => (
                <div
                    key={company.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedCompany === company.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleCompanySelect(company.id)}
                    data-oid="6:u4rq1"
                >
                    <h2 className="text-lg font-medium" data-oid="ijjw0:d">
                        {company.name}
                    </h2>
                </div>
            ))}
        </div>
    );

    const renderTableView = () => (
        <div className="overflow-x-auto" data-oid="cnb53q0">
            <table className="min-w-full divide-y divide-gray-200" data-oid="cx:yucj">
                <thead className="bg-gray-50" data-oid="xsr-pp0">
                    <tr data-oid="ahjy4mt">
                        <th
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            data-oid="t_9ne_q"
                        >
                            Company Name
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200" data-oid="grlbvc9">
                    {companies.map((company) => (
                        <tr
                            key={company.id}
                            className={`cursor-pointer ${
                                selectedCompany === company.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => handleCompanySelect(company.id)}
                            data-oid="asl87de"
                        >
                            <td className="px-6 py-4 whitespace-nowrap" data-oid="xuww_l5">
                                <span
                                    className="text-sm font-medium text-gray-900"
                                    data-oid="aifx2t7"
                                >
                                    {company.name}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4" data-oid="xk86bmn">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8" data-oid="9zh3psd">
                <div className="flex justify-between items-center mb-8" data-oid="9r:yy_:">
                    <h1 className="text-2xl font-semibold" data-oid="8d95i4b">
                        Companies
                    </h1>
                    <div className="flex space-x-2" data-oid="4v22qn:">
                        <button
                            onClick={() => setViewMode('tiles')}
                            className={`px-4 py-2 rounded-lg ${
                                viewMode === 'tiles'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid="g0rn17x"
                        >
                            Tiles
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-4 py-2 rounded-lg ${
                                viewMode === 'list'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid="znc0e6m"
                        >
                            List
                        </button>
                        <button
                            onClick={() => setViewMode('table')}
                            className={`px-4 py-2 rounded-lg ${
                                viewMode === 'table'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                            data-oid="5iezr11"
                        >
                            Table
                        </button>
                    </div>
                </div>

                {viewMode === 'tiles' && renderTilesView()}
                {viewMode === 'list' && renderListView()}
                {viewMode === 'table' && renderTableView()}
            </div>
        </div>
    );
}
