'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Sample data for inbox documents
const inboxDocuments = [
    { id: 1, name: 'Company Documents', type: 'folder' },
    { id: 2, name: 'Company Financial Records', type: 'folder' },
];

// Sample data for approval documents
const approvalDocuments = [];

// Sample data for signature documents
const signatureDocuments = [];

// Sample data for acknowledgment documents
const acknowledgeDocuments = [];

export default function InboxPage() {
    const params = useParams();
    const companyId = params.id;
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="min-h-screen bg-gray-50 pb-10" data-oid="k2nqae9">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="ywqkb85">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
                    data-oid="ligif4h"
                >
                    <h1 className="text-xl font-semibold text-gray-900" data-oid="ifp095k">
                        DSS Software Solutions Sdn. Bhd.
                    </h1>
                    <div className="flex items-center space-x-4" data-oid="jzircri">
                        <span className="text-sm text-gray-600" data-oid="-u94b07">
                            admin@dss.dms.com
                        </span>
                        <button
                            className="p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none"
                            data-oid="86y_biw"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid=".-6n5yi"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    data-oid="u5otg.9"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="5knfwa1">
                {/* Action Buttons */}
                <div className="mb-6 flex items-center space-x-4" data-oid=".lb01pg">
                    <div className="flex" data-oid="5_of:dc">
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-l-md hover:bg-blue-700"
                            data-oid="e88vto6"
                        >
                            Upload
                        </button>
                        <button
                            className="bg-blue-600 text-white px-2 py-2 rounded-r-md hover:bg-blue-700 border-l border-blue-500"
                            data-oid="hvf27_f"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="0obyigb"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                    data-oid="5rdybca"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1" data-oid="86f2hsy">
                        <input
                            type="text"
                            placeholder="Search docs, tags, etc."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            data-oid="s6_prjr"
                        />
                    </div>
                </div>

                {/* My Docs: Inbox */}
                <div className="bg-white shadow rounded-lg mb-6" data-oid="o4ivm49">
                    <div className="px-6 py-4 border-b border-gray-200" data-oid="ebpbl0v">
                        <h2 className="text-lg font-medium" data-oid="pj:sc6c">
                            My Docs: Inbox
                        </h2>
                    </div>
                    <div className="overflow-x-auto" data-oid="v1w4gz-">
                        <table className="min-w-full divide-y divide-gray-200" data-oid="hi0cydo">
                            <thead className="bg-gray-50" data-oid="4x81vvl">
                                <tr data-oid="-96zolv">
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="sbc4-yr"
                                    >
                                        SNo
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="zurum5j"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="3n56w_k"
                                    >
                                        Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="6sclj0l"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200" data-oid="xutfq25">
                                {inboxDocuments.map((doc, index) => (
                                    <tr
                                        key={doc.id}
                                        className="hover:bg-gray-50"
                                        data-oid="eql5mv."
                                    >
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                            data-oid="_sgozrl"
                                        >
                                            {index + 1}
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap"
                                            data-oid="c06n3kp"
                                        >
                                            <div className="flex items-center" data-oid="elv6f59">
                                                <svg
                                                    className="w-5 h-5 mr-2 text-yellow-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    data-oid="twot85."
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                        clipRule="evenodd"
                                                        data-oid="8qcx-5_"
                                                    />
                                                </svg>
                                                <Link
                                                    href={`/companies/${companyId}/documents/${doc.id}`}
                                                    className="text-blue-600 hover:text-blue-900"
                                                    data-oid="pfb1l0p"
                                                >
                                                    {doc.name}
                                                </Link>
                                            </div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                            data-oid="v-cax3-"
                                        >
                                            {doc.type}
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                            data-oid="95:fi.v"
                                        >
                                            <div className="flex space-x-2" data-oid="5ymnf8o">
                                                <button
                                                    className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                                                    data-oid="..z14yu"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        data-oid="u:ejpum"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                            data-oid="jf0g87:"
                                                        />

                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                            data-oid="q7o5-7h"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                                                    data-oid="nhm85y9"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        data-oid="mcbv784"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            data-oid="brc__4r"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                    data-oid="9v._jqd"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        data-oid="gb7cf5m"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                                            data-oid=":cfkok2"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                    data-oid="4mkwt9b"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        data-oid="s-thx61"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                            data-oid="yp1ke31"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {inboxDocuments.length === 0 && (
                                    <tr data-oid="5qtkawu">
                                        <td
                                            colSpan={4}
                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                            data-oid="yyhmq9r"
                                        >
                                            No documents found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div
                        className="px-6 py-3 flex items-center justify-between border-t border-gray-200"
                        data-oid="je0c_8k"
                    >
                        <div className="flex items-center" data-oid="cdjhaty">
                            <span className="text-sm text-gray-700 mr-2" data-oid="tga040z">
                                Show
                            </span>
                            <select
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                className="border border-gray-300 rounded px-2 py-1 text-sm"
                                data-oid="3f-c350"
                            >
                                <option value={10} data-oid="l9pkyau">
                                    10
                                </option>
                                <option value={25} data-oid="9:29c6:">
                                    25
                                </option>
                                <option value={50} data-oid="_g:dj.7">
                                    50
                                </option>
                                <option value={100} data-oid="_gdnstp">
                                    100
                                </option>
                            </select>
                            <span className="text-sm text-gray-700 ml-2" data-oid="jf8k4ry">
                                items per page
                            </span>
                        </div>
                        <div className="flex items-center space-x-2" data-oid="um1e9e3">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="px-2 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
                                data-oid="msfx_u_"
                            >
                                &lt;
                            </button>
                            <span
                                className="px-3 py-1 bg-blue-600 text-white rounded"
                                data-oid="_tfw18f"
                            >
                                {currentPage}
                            </span>
                            <button
                                disabled={inboxDocuments.length < itemsPerPage}
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="px-2 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
                                data-oid="9x6qm8g"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Files that need my approval */}
                <div className="bg-white shadow rounded-lg mb-6" data-oid="uc7ftvz">
                    <div className="px-6 py-4 border-b border-gray-200" data-oid="7v1.u3j">
                        <h2 className="text-lg font-medium" data-oid="4pbm23i">
                            Files that need my approval
                        </h2>
                    </div>
                    <div className="overflow-x-auto" data-oid=":_7:ajy">
                        <table className="min-w-full divide-y divide-gray-200" data-oid=".n4dk74">
                            <thead className="bg-gray-50" data-oid="0us2n32">
                                <tr data-oid="mbn_8l.">
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="d:8:1ad"
                                    >
                                        SNo
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="4kik.ig"
                                    >
                                        File Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="6nk4uwo"
                                    >
                                        Assigned At
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="g6h:_v:"
                                    >
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200" data-oid="u.3e7wf">
                                {approvalDocuments.length === 0 && (
                                    <tr data-oid="1a8u-b1">
                                        <td
                                            colSpan={4}
                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                            data-oid="jp6djzf"
                                        >
                                            No documents found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Files that need my electronic signature */}
                <div className="bg-white shadow rounded-lg mb-6" data-oid="ttkrs_6">
                    <div className="px-6 py-4 border-b border-gray-200" data-oid="genuyjt">
                        <h2 className="text-lg font-medium" data-oid="_g737tn">
                            Files that need my electronic signature
                        </h2>
                    </div>
                    <div className="overflow-x-auto" data-oid="9hcwy1v">
                        <table className="min-w-full divide-y divide-gray-200" data-oid="4_kk1nx">
                            <thead className="bg-gray-50" data-oid="lepol-8">
                                <tr data-oid="-dgnh.2">
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="6t8p_08"
                                    >
                                        SNo
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="eoc-x:_"
                                    >
                                        File Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="oe8nk-q"
                                    >
                                        Assigned At
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="5f..:x_"
                                    >
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200" data-oid="r0:8kj2">
                                {signatureDocuments.length === 0 && (
                                    <tr data-oid="8:9nirr">
                                        <td
                                            colSpan={4}
                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                            data-oid="dwfa:tg"
                                        >
                                            No documents found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Files that need my acknowledge */}
                <div className="bg-white shadow rounded-lg mb-6" data-oid="4o2y:rf">
                    <div className="px-6 py-4 border-b border-gray-200" data-oid="gilqdr5">
                        <h2 className="text-lg font-medium" data-oid="x.j2dxc">
                            Files that need my acknowledge
                        </h2>
                    </div>
                    <div className="overflow-x-auto" data-oid=".:xi3nd">
                        <table className="min-w-full divide-y divide-gray-200" data-oid="pe5h9_6">
                            <thead className="bg-gray-50" data-oid="hw16fdp">
                                <tr data-oid="8302axa">
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="2y.x6f-"
                                    >
                                        SNo
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="8bu_ntg"
                                    >
                                        File Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="hcv_1ko"
                                    >
                                        Assigned At
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="xue38-m"
                                    >
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200" data-oid="1nd047b">
                                {acknowledgeDocuments.length === 0 && (
                                    <tr data-oid="dshc82v">
                                        <td
                                            colSpan={4}
                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                            data-oid="3sq0u62"
                                        >
                                            No documents found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
