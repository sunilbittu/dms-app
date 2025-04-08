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
        <div className="p-6" data-oid="p51cqrk">
            <div className="flex items-center justify-between mb-8" data-oid="713m0en">
                <div className="flex gap-2" data-oid="yn9dq5h">
                    <Button variant="primary" data-oid="-a008:l">
                        Upload
                    </Button>
                    <Input
                        placeholder="Search docs, tags, etc."
                        className="w-[300px]"
                        data-oid="sr6e0ak"
                    />
                </div>
                <div className="flex gap-4" data-oid="sa.jno6">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        data-oid="me_4ted"
                    >
                        <span data-oid="qgje764">Create Folder</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        data-oid="8w3zxq4"
                    >
                        <span data-oid="sg332pr">Advanced Search</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        data-oid="m5vvsus"
                    >
                        <span data-oid="l62i6iz">Audit Log</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        data-oid="qiai79g"
                    >
                        <span data-oid="z0187zm">Numbering</span>
                    </Button>
                </div>
            </div>

            <div className="mb-8" data-oid="53m8mm8">
                <h2 className="text-xl font-semibold mb-4" data-oid="t7ob71b">
                    My Docs: Inbox
                </h2>
                <table className="w-full" data-oid="fgizj3p">
                    <thead data-oid="e:5ll3h">
                        <tr className="border-b" data-oid="j6y8m1f">
                            <th className="text-left py-2" data-oid="_cmzqtz">
                                SNo
                            </th>
                            <th className="text-left py-2" data-oid="8:3co1p">
                                Name
                            </th>
                            <th className="text-left py-2" data-oid="_:f5l93">
                                Type
                            </th>
                            <th className="text-left py-2" data-oid="2:b08rd">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody data-oid="o3ikg8:">
                        {documents.map((doc) => (
                            <tr key={doc.id} className="border-b" data-oid="6vf_pxf">
                                <td className="py-3" data-oid="d-_04ad">
                                    {doc.id}
                                </td>
                                <td className="py-3 text-blue-600" data-oid="msp912h">
                                    {doc.name}
                                </td>
                                <td className="py-3" data-oid="3k_zy7g">
                                    <div className="flex items-center gap-2" data-oid="zq4.ugb">
                                        <Folder className="w-5 h-5" data-oid="9070:0h" />
                                    </div>
                                </td>
                                <td className="py-3" data-oid="c1c83lp">
                                    <div className="flex gap-2" data-oid="g2:g_m7">
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="text-blue-600"
                                            data-oid="w:ihvia"
                                        >
                                            <Eye className="w-4 h-4" data-oid="xnd.0yq" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="text-red-600"
                                            data-oid="chs1h2o"
                                        >
                                            <Trash2 className="w-4 h-4" data-oid="vy6.3gk" />
                                        </Button>
                                        <Button size="icon" variant="ghost" data-oid="u2gdnll">
                                            <Share className="w-4 h-4" data-oid="awamrw-" />
                                        </Button>
                                        <Button size="icon" variant="ghost" data-oid="dob-nvs">
                                            <Edit className="w-4 h-4" data-oid="z95o:z8" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mb-8" data-oid="ubonjgw">
                <h2 className="text-xl font-semibold mb-4" data-oid="op1ujbb">
                    Files that need my approval
                </h2>
                <table className="w-full" data-oid="zc:l11m">
                    <thead data-oid="wlc-bw-">
                        <tr className="border-b" data-oid="dxghpps">
                            <th className="text-left py-2" data-oid="nv:7bb6">
                                SNo
                            </th>
                            <th className="text-left py-2" data-oid="qua6zwd">
                                File Name
                            </th>
                            <th className="text-left py-2" data-oid="jqd2y..">
                                Assigned At
                            </th>
                            <th className="text-left py-2" data-oid="op0-t5z">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody data-oid=":f..b8e"></tbody>
                </table>
            </div>

            <div className="mb-8" data-oid="isgc0ng">
                <h2 className="text-xl font-semibold mb-4" data-oid="ke4miup">
                    Files that need my electronic signature
                </h2>
                <table className="w-full" data-oid="upwndzl">
                    <thead data-oid="aiq8vcm">
                        <tr className="border-b" data-oid=":v1rb4x">
                            <th className="text-left py-2" data-oid="iygdbjf">
                                SNo
                            </th>
                            <th className="text-left py-2" data-oid="t0j6pvz">
                                File Name
                            </th>
                            <th className="text-left py-2" data-oid="usaykj4">
                                Assigned At
                            </th>
                            <th className="text-left py-2" data-oid="d-z4ycf">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody data-oid="88hfk3r"></tbody>
                </table>
            </div>

            <div data-oid="ox2vomg">
                <h2 className="text-xl font-semibold mb-4" data-oid="qxeftec">
                    Files that need my acknowledge
                </h2>
                <table className="w-full" data-oid="4pc:n4s">
                    <thead data-oid="thsbnk_">
                        <tr className="border-b" data-oid="dd1ijms">
                            <th className="text-left py-2" data-oid="3-tkyle">
                                SNo
                            </th>
                            <th className="text-left py-2" data-oid="9pp7tvy">
                                File Name
                            </th>
                            <th className="text-left py-2" data-oid="xsejae2">
                                Assigned At
                            </th>
                            <th className="text-left py-2" data-oid="3l9le0_">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody data-oid="jxvvs_t"></tbody>
                </table>
            </div>
        </div>
    );
}
