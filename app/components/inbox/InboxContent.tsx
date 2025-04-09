'use client';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Eye, Trash2, Share, Edit, Folder } from 'lucide-react';

interface Document {
    id: number;
    name: string;
    type: 'folder';
}

export function InboxContent() {
    const [documents, setDocuments] = useState<Document[]>([
        { id: 1, name: 'Company Documents', type: 'folder' },
        { id: 2, name: 'Company Financial Records', type: 'folder' },
    ]);

    return (
        <div className="p-6" data-oid="-3x.otk">
            <div className="flex items-center justify-between mb-8" data-oid="hpkpnrr">
                <div className="flex gap-2" data-oid="uy_oqus">
                    <Button variant="primary" data-oid="vawd..o">
                        Upload
                    </Button>
                    <Input
                        placeholder="Search docs, tags, etc."
                        className="w-[300px]"
                        data-oid="kl891tg"
                    />
                </div>
                <div className="flex gap-4" data-oid="k03xrr2">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        data-oid="iyzwfny"
                    >
                        <span data-oid="djo-95e">Create Folder</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        data-oid="ju10-dw"
                    >
                        <span data-oid="ja8u_mf">Advanced Search</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        data-oid="sbbx.w7"
                    >
                        <span data-oid="1a4dgqx">Audit Log</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        data-oid="0:vb-9."
                    >
                        <span data-oid=":9gt:ai">Numbering</span>
                    </Button>
                </div>
            </div>

            <div className="mb-8" data-oid="4i-1xy0">
                <h2 className="text-xl font-semibold mb-4" data-oid="n.uawz8">
                    My Docs: Inbox
                </h2>
                <table className="w-full" data-oid="a.rw6-m">
                    <thead data-oid="n:6op65">
                        <tr className="border-b" data-oid="71kixl7">
                            <th className="text-left py-2" data-oid="8g8rc61">
                                SNo
                            </th>
                            <th className="text-left py-2" data-oid="9o2g9po">
                                Name
                            </th>
                            <th className="text-left py-2" data-oid="q3kj5jy">
                                Type
                            </th>
                            <th className="text-left py-2" data-oid="2tiik.z">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody data-oid="w0dabvh">
                        {documents.map((doc) => (
                            <tr key={doc.id} className="border-b" data-oid="i5s:6u8">
                                <td className="py-3" data-oid="j9fn2qq">
                                    {doc.id}
                                </td>
                                <td className="py-3 text-blue-600" data-oid="5dpaox2">
                                    {doc.name}
                                </td>
                                <td className="py-3" data-oid="fmcmfds">
                                    <div className="flex items-center gap-2" data-oid="iusjtsz">
                                        <Folder className="w-5 h-5" data-oid="ujjug98" />
                                    </div>
                                </td>
                                <td className="py-3" data-oid=".pri3r5">
                                    <div className="flex gap-2" data-oid="c4ja7bv">
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="text-blue-600"
                                            data-oid="64y-q14"
                                        >
                                            <Eye className="w-4 h-4" data-oid="q34y0pj" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="text-red-600"
                                            data-oid="qmoy9he"
                                        >
                                            <Trash2 className="w-4 h-4" data-oid="zb935.u" />
                                        </Button>
                                        <Button size="icon" variant="ghost" data-oid="crcm_hw">
                                            <Share className="w-4 h-4" data-oid="u_o1ezc" />
                                        </Button>
                                        <Button size="icon" variant="ghost" data-oid="6dwnrci">
                                            <Edit className="w-4 h-4" data-oid="92uc415" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mb-8" data-oid="8ia:813">
                <h2 className="text-xl font-semibold mb-4" data-oid="sfmewld">
                    Files that need my approval
                </h2>
                <table className="w-full" data-oid="wh73zpc">
                    <thead data-oid="zeai3on">
                        <tr className="border-b" data-oid="4ta2nbk">
                            <th className="text-left py-2" data-oid="pe71ybl">
                                SNo
                            </th>
                            <th className="text-left py-2" data-oid="b8d8fyo">
                                File Name
                            </th>
                            <th className="text-left py-2" data-oid="ry14tte">
                                Assigned At
                            </th>
                            <th className="text-left py-2" data-oid="lqd_8vm">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody data-oid=":48ofe:"></tbody>
                </table>
            </div>

            <div className="mb-8" data-oid="hu7s_vr">
                <h2 className="text-xl font-semibold mb-4" data-oid="8x2nma2">
                    Files that need my electronic signature
                </h2>
                <table className="w-full" data-oid="h__ec8y">
                    <thead data-oid="d5od45r">
                        <tr className="border-b" data-oid="oggl-81">
                            <th className="text-left py-2" data-oid=":--_35u">
                                SNo
                            </th>
                            <th className="text-left py-2" data-oid="an08qmp">
                                File Name
                            </th>
                            <th className="text-left py-2" data-oid="_1smm5s">
                                Assigned At
                            </th>
                            <th className="text-left py-2" data-oid="h11d567">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody data-oid="6tw2v_e"></tbody>
                </table>
            </div>

            <div data-oid="7w44_mk">
                <h2 className="text-xl font-semibold mb-4" data-oid="usz-7vx">
                    Files that need my acknowledge
                </h2>
                <table className="w-full" data-oid="6y64un9">
                    <thead data-oid="6zddack">
                        <tr className="border-b" data-oid="5bcjl06">
                            <th className="text-left py-2" data-oid="jfbbh4w">
                                SNo
                            </th>
                            <th className="text-left py-2" data-oid="jx4vest">
                                File Name
                            </th>
                            <th className="text-left py-2" data-oid="7nicgng">
                                Assigned At
                            </th>
                            <th className="text-left py-2" data-oid="2yww6:p">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody data-oid=":aktfp6"></tbody>
                </table>
            </div>
        </div>
    );
}
