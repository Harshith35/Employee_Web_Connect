

import React from 'react';

const hrPolicies = [
    { name: 'Policy 1', file: '/pdfs/policy1.pdf' },
    { name: 'Policy 2', file: '/pdfs/policy2.pdf' },
    // Add more policies as needed
];

const HRPolicies = () => {
    return (
        <div className="hr-policies">
            
            <ul>
                {hrPolicies.map((policy, index) => (
                    <li key={index}>
                        <a href={policy.file} target="_blank" rel="noopener noreferrer">
                            {policy.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HRPolicies;
