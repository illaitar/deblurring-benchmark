$(function () {
    $(document).ready(function() {
            Highcharts.chart('detailed', {
            
            chart: {
                zoomType: 'xy',
            },
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            title: {
                text: 'VMAF to Frame Number: Sequence # 15'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'VMAF'
                }
            },
            xAxis: {
                title: {
                        text: 'Frame Number'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },series: [{
		name: 'NNEDI',
		data: [93.99, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 93.593, 94.649, 91.794, 91.894, 90.873, 90.281, 90.208, 90.125, 90.036, 89.93, 89.847, 89.762, 89.702, 89.631, 89.585, 89.546, 89.505, 89.479, 89.457, 89.456]
},{
		name: 'ST-Deint',
		data: [96.456, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.84, 96.157, 96.046, 97.114, 96.173, 96.436, 96.155, 96.813, 96.399, 96.772, 96.4, 96.759, 96.38, 96.709, 96.363, 96.671, 96.348, 96.646, 96.338, 96.628, 96.41]
},{
		name: 'PAL Interpolation',
		data: [90.939, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.135, 95.658, 97.781, 88.578, 92.119, 87.474, 90.444, 91.039, 92.094, 96.194, 96.739, 96.874, 96.93, 97.062, 97.161, 97.227, 97.281, 97.301, 97.305, 97.319, 97.31, 97.307, 97.321]
},{
		name: 'SonyVegas Blend Field',
		data: [11.036, 43.197, 59.349, 51.563, 58.885, 20.248, 10.434, 3.302, 3.694, 27.515, 17.66, 45.834, 43.816, 62.818, 62.619, 77.203, 78.663, 78.816, 78.982, 79.081, 79.145, 79.195, 79.236, 79.226, 79.205, 79.188, 79.178, 79.143, 79.121, 79.125]
},{
		name: 'Vapoursynth EEDI3',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 94.712, 92.759, 90.464, 90.065, 88.95, 88.133, 87.493, 87.478, 87.421, 87.356, 87.287, 87.245, 87.192, 87.142, 87.094, 87.058, 87.026, 86.997, 86.981, 86.966, 86.958]
},{
		name: 'TDAN',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 88.395, 90.201, 92.352, 85.4, 88.181, 87.177, 91.766, 93.229, 95.048, 96.038, 96.094, 96.057, 96.035, 95.992, 95.963, 95.933, 95.92, 95.88, 95.852, 95.836, 95.822, 95.794, 95.777, 91.482]
},{
		name: 'Bob',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 92.283, 90.31, 87.887, 87.878, 86.7, 85.971, 85.366, 85.338, 85.284, 85.215, 85.156, 85.103, 85.065, 85.022, 84.99, 84.958, 84.933, 84.912, 84.894, 84.88, 84.877]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [91.556, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 89.254, 85.12, 91.156, 90.746, 90.175, 90.035, 94.578, 92.921, 96.939, 97.4, 97.446, 97.54, 97.547, 97.575, 97.593, 97.628, 97.599, 97.577, 97.56, 97.55, 97.519, 97.498, 97.5]
},{
		name: 'DfRes SA',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.165, 95.268, 95.858, 95.495, 95.919, 96.079, 96.703, 96.766, 96.743, 96.717, 96.687, 96.662, 96.639, 96.623, 96.606, 96.595, 96.59, 96.581, 96.573, 96.569, 92.821]
},{
		name: 'DfRes 122000 G2e 3',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.487, 95.658, 95.921, 95.582, 96.4, 96.157, 96.825, 96.861, 96.842, 96.82, 96.8, 96.771, 96.751, 96.74, 96.73, 96.713, 96.702, 96.698, 96.687, 96.684, 91.741]
},{
		name: 'SwinDI',
		data: [95.275, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.408, 100.0, 96.391, 97.19, 95.487, 95.427, 95.311, 95.252, 95.189, 95.112, 95.036, 94.961, 94.907, 94.857, 94.83, 94.78, 94.724, 94.706, 94.68, 94.663]
},{
		name: 'YADIF',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 94.465, 93.523, 92.97, 93.414, 94.791, 94.57, 96.96, 97.677, 97.683, 97.655, 97.626, 97.592, 97.564, 97.547, 97.526, 97.508, 97.498, 97.487, 97.476, 97.465, 97.458]
},{
		name: 'SonyVegas Interpolate Field',
		data: [89.842, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.795, 96.621, 98.717, 89.318, 89.315, 87.705, 87.35, 86.405, 85.713, 85.653, 85.575, 85.483, 85.383, 85.299, 85.225, 85.16, 85.104, 85.058, 85.008, 84.975, 84.948, 84.924, 84.926]
},{
		name: 'EDVR',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 93.79, 94.375, 97.68, 88.488, 91.366, 90.824, 93.338, 94.314, 95.836, 96.045, 96.098, 96.153, 96.132, 96.095, 96.112, 96.102, 96.088, 96.098, 96.098, 96.094, 96.086, 96.072, 96.065, 86.491]
},{
		name: 'MFDIN L',
		data: [95.535, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.975, 100.0, 97.004, 98.688, 97.425, 97.986, 97.973, 97.906, 97.837, 97.753, 97.679, 97.605, 97.551, 97.496, 97.455, 97.421, 97.389, 97.36, 97.342, 97.33]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [16.013, 45.406, 60.687, 53.063, 60.614, 24.789, 16.725, 11.602, 11.456, 38.387, 27.553, 57.249, 56.93, 78.287, 77.901, 95.049, 96.97, 97.143, 97.334, 97.439, 97.505, 97.561, 97.607, 97.594, 97.575, 97.563, 97.551, 97.519, 97.498, 97.5]
},{
		name: 'MSU Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.071, 95.0, 94.212, 95.322, 94.218, 94.656, 95.874, 96.579, 97.101, 97.354, 97.464, 97.545, 97.543, 97.516, 97.531, 97.521, 97.507, 97.505, 97.484, 97.466, 96.18]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [93.654, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.728, 100.0, 90.935, 90.982, 89.093, 89.201, 88.214, 87.817, 87.854, 87.885, 87.935, 87.957, 88.003, 87.98, 87.984, 87.95, 87.918, 87.884, 87.857, 87.804, 87.775, 87.803]
},{
		name: 'Vapoursynth TDeintMod',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 93.661, 93.027, 92.497, 92.929, 94.411, 94.459, 96.712, 97.395, 97.594, 97.56, 97.549, 97.566, 97.528, 97.534, 97.501, 97.48, 97.458, 97.451, 97.434, 97.428, 97.431]
},{
		name: 'DfRes',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.887, 95.233, 93.935, 92.043, 92.362, 91.094, 90.754, 90.668, 90.617, 90.618, 90.577, 90.519, 90.45, 90.38, 90.327, 90.293, 90.265, 90.24, 90.212, 90.182, 89.805]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [89.833, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 88.578, 83.336, 89.04, 89.251, 84.382, 89.436, 90.219, 92.764, 93.572, 97.023, 97.681, 97.604, 97.544, 97.521, 97.458, 97.444, 97.453, 97.427, 97.464, 97.477, 97.478, 97.49, 97.49]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.896, 100.0, 100.0, 91.53, 90.108, 87.97, 88.487, 88.693, 88.301, 88.858, 89.751, 89.764, 89.707, 89.651, 89.592, 89.553, 89.515, 89.479, 89.446, 89.421, 89.405, 89.383, 89.373, 89.367]
},{
		name: 'FLAD',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 99.368, 98.379, 98.386, 96.539, 97.559, 96.583, 97.283, 97.39, 97.357, 97.32, 97.269, 97.224, 97.179, 97.152, 97.121, 97.095, 97.075, 97.063, 97.042, 97.028, 97.016]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.075, 97.421, 97.86, 94.135, 92.438, 93.188, 93.605, 95.056, 95.166, 97.273, 97.817, 97.801, 97.764, 97.721, 97.677, 97.635, 97.606, 97.578, 97.551, 97.531, 97.513, 97.494, 97.481, 86.722]
},{
		name: 'DUF',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 93.884, 95.91, 96.054, 87.484, 89.849, 88.937, 92.269, 94.561, 95.852, 96.648, 96.735, 96.713, 96.691, 96.682, 96.654, 96.63, 96.61, 96.593, 96.583, 96.573, 96.562, 96.549, 96.539, 85.495]
},{
		name: 'EDVR_woTSA',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 96.89, 98.113, 96.953, 90.408, 92.956, 91.338, 94.164, 95.072, 95.072, 95.513, 95.525, 95.512, 95.472, 95.474, 95.459, 95.451, 95.44, 95.449, 95.446, 95.43, 95.425, 95.412, 95.401, 88.052]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [17.007, 4.304, 100.0, 27.474, 100.0, 0.0, 100.0, 0.0, 89.093, 17.023, 81.293, 41.637, 85.059, 66.825, 88.583, 90.04, 93.794, 94.263, 95.06, 95.287, 95.408, 95.792, 95.67, 96.014, 95.759, 96.095, 95.835, 96.066, 95.817, 95.983]
},{
		name: 'MFDIN',
		data: [89.939, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 97.58, 96.495, 99.984, 92.511, 95.588, 93.52, 95.748, 95.292, 96.38, 96.615, 96.599, 96.601, 96.596, 96.576, 96.548, 96.524, 96.48, 96.431, 96.403, 96.372, 96.333, 96.293, 96.251]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 95.297, 94.261, 92.676, 92.016, 92.869, 91.3, 92.023, 92.123, 92.081, 92.043, 91.972, 91.92, 91.873, 91.839, 91.817, 91.787, 91.772, 91.754, 91.73, 91.714, 91.7]
},{
		name: 'Muksun Deinterlacer',
		data: [93.654, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 98.728, 100.0, 90.935, 90.982, 89.093, 89.201, 88.214, 87.817, 87.854, 87.885, 87.935, 87.957, 88.003, 87.98, 87.984, 87.95, 87.918, 87.884, 87.857, 87.804, 87.775, 87.803]
},{
		name: 'Kernel Deinterlacer',
		data: [89.833, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 87.543, 82.913, 88.896, 88.968, 84.177, 89.378, 90.192, 92.923, 93.737, 97.165, 97.835, 97.791, 97.72, 97.705, 97.627, 97.599, 97.569, 97.561, 97.551, 97.54, 97.513, 97.498, 97.498]
},],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    });

});