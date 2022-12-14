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
                text: 'PSNR to Frame Number: Sequence # 7'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'PSNR'
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
		data: [38.772, 38.347, 37.768, 37.489, 37.395, 37.669, 38.344, 37.517, 37.487, 37.314, 37.526, 37.497, 37.826, 37.58, 37.553, 37.636, 37.571, 37.577, 37.84, 37.27, 37.196, 37.308, 37.265, 37.432, 37.806, 37.332, 37.909, 38.029, 37.507, 38.266]
},{
		name: 'ST-Deint',
		data: [38.813, 39.737, 38.911, 38.469, 39.832, 39.121, 38.605, 39.54, 38.939, 39.394, 39.952, 39.144, 38.468, 40.014, 39.043, 38.197, 39.621, 40.36, 39.197, 38.45, 40.732, 38.248, 40.024, 40.991, 39.743, 38.056, 41.999, 41.019, 39.964, 39.219]
},{
		name: 'PAL Interpolation',
		data: [33.856, 33.625, 33.376, 33.253, 33.321, 33.925, 33.567, 33.286, 33.366, 33.262, 35.195, 34.243, 33.91, 33.909, 35.431, 33.483, 33.425, 34.975, 33.323, 33.34, 34.868, 35.497, 33.909, 34.972, 36.284, 33.381, 35.834, 35.409, 35.509, 35.378]
},{
		name: 'SonyVegas Blend Field',
		data: [33.817, 32.745, 33.539, 33.562, 35.643, 34.921, 33.375, 35.632, 34.428, 35.205, 35.835, 35.011, 35.415, 36.375, 36.016, 35.153, 36.095, 36.42, 35.329, 34.909, 36.458, 35.103, 36.252, 36.792, 36.152, 35.209, 37.291, 37.03, 36.546, 36.068]
},{
		name: 'Vapoursynth EEDI3',
		data: [38.213, 37.848, 37.409, 37.169, 37.091, 37.304, 37.824, 37.197, 37.152, 36.977, 37.173, 37.153, 37.388, 37.205, 37.175, 37.27, 37.202, 37.174, 37.433, 36.943, 36.866, 36.936, 36.903, 37.052, 37.392, 36.982, 37.476, 37.556, 37.15, 37.745]
},{
		name: 'TDAN',
		data: [38.875, 38.497, 37.749, 37.685, 38.889, 38.272, 39.253, 38.868, 38.342, 39.51, 39.347, 39.997, 40.571, 41.385, 40.424, 39.259, 40.735, 40.806, 40.635, 40.772, 41.783, 40.356, 40.639, 42.193, 41.192, 40.748, 43.53, 41.885, 41.577, 38.065]
},{
		name: 'Bob',
		data: [37.354, 37.035, 36.609, 36.386, 36.318, 36.529, 37.022, 36.401, 36.365, 36.263, 36.434, 36.391, 36.598, 36.447, 36.416, 36.495, 36.418, 36.436, 36.632, 36.201, 36.153, 36.231, 36.189, 36.331, 36.609, 36.281, 36.712, 36.769, 36.424, 36.94]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [35.03, 35.133, 34.443, 34.343, 36.612, 35.791, 34.947, 36.661, 35.261, 36.204, 37.534, 36.186, 36.043, 37.555, 37.646, 35.43, 37.113, 37.757, 35.591, 35.527, 37.919, 35.417, 37.543, 38.141, 37.719, 35.656, 38.732, 38.646, 38.089, 37.916]
},{
		name: 'DfRes SA',
		data: [42.305, 42.292, 41.509, 41.575, 41.706, 41.996, 42.577, 42.59, 41.879, 41.686, 41.943, 43.37, 44.27, 44.388, 43.988, 42.761, 43.926, 44.231, 44.069, 44.212, 44.778, 43.557, 43.775, 44.482, 44.653, 43.631, 45.585, 45.647, 44.216, 37.764]
},{
		name: 'DfRes 122000 G2e 3',
		data: [41.99, 42.065, 41.251, 41.225, 41.436, 41.7, 42.262, 42.318, 41.601, 41.546, 41.627, 43.011, 43.918, 44.087, 43.609, 42.339, 43.527, 43.975, 43.938, 43.834, 44.454, 43.289, 43.464, 44.277, 44.277, 43.504, 45.344, 45.336, 43.963, 38.311]
},{
		name: 'SwinDI',
		data: [37.626, 37.32, 36.991, 36.776, 36.672, 36.871, 37.275, 36.774, 36.772, 36.622, 36.811, 36.75, 37.013, 36.8, 36.785, 36.837, 36.812, 36.801, 36.973, 36.608, 36.563, 36.69, 36.649, 36.732, 37.003, 36.675, 37.053, 37.097, 36.764, 37.285]
},{
		name: 'YADIF',
		data: [37.675, 37.544, 36.99, 36.685, 36.919, 36.924, 37.678, 36.977, 36.791, 37.274, 37.431, 37.303, 37.625, 38.471, 37.545, 37.053, 37.906, 37.585, 37.571, 37.703, 38.179, 37.511, 37.941, 38.699, 38.039, 37.329, 39.378, 38.619, 38.438, 38.732]
},{
		name: 'SonyVegas Interpolate Field',
		data: [37.344, 37.029, 36.602, 36.378, 36.305, 36.518, 37.006, 36.388, 36.354, 36.251, 36.422, 36.381, 36.587, 36.438, 36.404, 36.489, 36.405, 36.424, 36.62, 36.189, 36.141, 36.222, 36.178, 36.318, 36.597, 36.274, 36.701, 36.755, 36.411, 36.929]
},{
		name: 'EDVR',
		data: [40.483, 40.277, 39.501, 38.919, 39.367, 39.803, 40.937, 40.472, 40.083, 40.328, 40.507, 40.56, 41.949, 42.16, 41.215, 40.756, 40.888, 41.773, 41.335, 42.005, 42.479, 41.505, 41.578, 42.521, 42.352, 42.004, 44.251, 43.47, 42.231, 32.144]
},{
		name: 'MFDIN L',
		data: [45.925, 46.247, 44.693, 45.142, 45.783, 45.56, 46.34, 46.049, 45.521, 46.006, 45.908, 46.111, 46.336, 46.738, 46.599, 45.567, 46.912, 46.626, 46.873, 46.551, 46.724, 45.742, 45.935, 46.875, 46.736, 45.794, 47.057, 47.14, 46.667, 45.859]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [31.975, 30.751, 31.994, 32.096, 35.731, 34.169, 31.476, 35.609, 33.526, 34.963, 36.012, 34.501, 35.091, 37.284, 36.422, 34.531, 36.414, 37.124, 34.767, 34.443, 38.073, 34.697, 37.446, 38.827, 36.1, 34.914, 39.765, 38.504, 37.576, 35.864]
},{
		name: 'MSU Deinterlacer',
		data: [38.722, 41.21, 40.697, 39.742, 40.938, 41.038, 41.465, 41.215, 40.494, 41.108, 41.282, 41.438, 41.612, 42.271, 42.013, 41.44, 41.728, 41.923, 42.273, 41.2, 42.003, 41.498, 41.637, 42.233, 42.485, 41.464, 43.045, 43.226, 42.424, 39.486]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [36.489, 36.122, 35.86, 35.662, 36.146, 35.974, 36.152, 36.195, 35.827, 35.888, 36.26, 35.995, 36.161, 36.41, 36.319, 35.975, 36.29, 36.337, 36.077, 35.721, 36.125, 35.802, 36.096, 36.316, 36.474, 35.865, 36.842, 36.793, 36.438, 36.743]
},{
		name: 'Vapoursynth TDeintMod',
		data: [38.135, 37.751, 37.189, 36.916, 36.832, 37.106, 37.705, 36.962, 36.911, 36.787, 37.04, 37.026, 37.332, 37.139, 37.124, 37.067, 37.047, 37.086, 37.289, 36.822, 36.854, 36.996, 36.933, 37.119, 37.533, 36.83, 37.624, 37.718, 37.21, 37.895]
},{
		name: 'DfRes',
		data: [41.939, 41.989, 40.933, 41.123, 41.678, 41.409, 42.197, 41.8, 41.361, 41.587, 41.811, 42.183, 42.415, 42.461, 42.312, 41.784, 42.474, 42.537, 42.559, 42.262, 42.424, 41.855, 42.196, 42.468, 42.739, 42.263, 42.874, 43.058, 42.431, 41.511]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [37.344, 37.547, 37.002, 36.784, 36.487, 37.086, 37.319, 36.515, 36.551, 36.42, 37.6, 37.068, 37.129, 37.047, 37.725, 36.783, 36.614, 37.397, 36.866, 36.499, 37.277, 37.305, 36.909, 37.364, 38.385, 36.591, 38.202, 38.065, 37.656, 38.377]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [35.516, 36.386, 36.309, 36.196, 36.854, 36.619, 36.186, 36.668, 36.069, 36.451, 37.741, 36.765, 36.659, 37.35, 37.454, 36.124, 36.978, 37.645, 36.266, 35.959, 37.751, 36.941, 37.098, 37.782, 38.093, 36.115, 38.706, 38.298, 37.836, 37.85]
},{
		name: 'FLAD',
		data: [43.847, 44.589, 43.374, 43.026, 43.387, 43.953, 44.589, 44.396, 43.9, 43.995, 43.923, 44.071, 45.368, 45.669, 45.805, 44.649, 45.743, 45.327, 45.863, 45.572, 45.681, 45.052, 45.108, 45.849, 45.609, 45.151, 46.363, 46.927, 45.969, 44.223]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [37.302, 37.424, 36.64, 36.41, 37.525, 37.17, 37.74, 37.132, 37.135, 38.036, 37.927, 38.166, 38.423, 39.475, 38.379, 37.513, 38.768, 38.456, 38.258, 38.285, 39.123, 38.067, 38.689, 39.703, 38.933, 38.123, 40.365, 39.399, 39.415, 36.818]
},{
		name: 'DUF',
		data: [39.597, 39.878, 39.15, 38.884, 39.064, 39.097, 40.435, 39.757, 39.292, 40.028, 39.847, 40.769, 41.639, 41.748, 40.985, 40.172, 41.109, 41.331, 41.027, 41.433, 41.948, 40.903, 40.924, 42.314, 41.551, 41.294, 43.759, 42.378, 41.764, 32.204]
},{
		name: 'EDVR_woTSA',
		data: [40.478, 40.413, 39.618, 39.367, 39.825, 39.99, 41.075, 40.295, 39.927, 40.257, 40.644, 40.798, 42.197, 42.134, 41.67, 40.906, 41.445, 41.739, 41.619, 42.351, 42.615, 41.755, 41.593, 42.692, 42.393, 41.88, 43.774, 43.675, 42.017, 32.542]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [31.853, 29.283, 32.773, 31.013, 34.984, 32.403, 34.49, 33.421, 35.287, 32.828, 36.273, 32.638, 36.289, 34.624, 37.139, 32.618, 37.211, 34.834, 36.995, 32.743, 37.478, 32.812, 37.442, 36.062, 38.184, 32.848, 38.677, 35.732, 38.33, 33.805]
},{
		name: 'MFDIN',
		data: [39.71, 40.821, 38.697, 38.441, 40.086, 39.338, 40.827, 39.968, 39.244, 40.488, 40.41, 41.156, 40.903, 42.164, 41.18, 39.401, 41.659, 41.577, 41.271, 41.071, 42.245, 40.602, 41.105, 42.317, 41.859, 40.888, 43.347, 42.253, 42.166, 40.116]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [38.36, 38.046, 37.444, 37.167, 37.29, 37.412, 37.943, 37.348, 37.196, 37.143, 37.457, 37.283, 37.541, 37.528, 37.426, 37.299, 37.487, 37.498, 37.478, 37.01, 37.206, 37.023, 37.224, 37.377, 37.659, 37.048, 37.854, 37.955, 37.429, 38.078]
},{
		name: 'Muksun Deinterlacer',
		data: [36.489, 36.122, 35.86, 35.662, 36.146, 35.974, 36.152, 36.195, 35.827, 35.888, 36.26, 35.995, 36.161, 36.41, 36.319, 35.975, 36.29, 36.337, 36.077, 35.721, 36.125, 35.802, 36.096, 36.316, 36.474, 35.865, 36.842, 36.793, 36.438, 36.743]
},{
		name: 'Kernel Deinterlacer',
		data: [37.344, 37.083, 36.539, 36.539, 36.488, 36.907, 36.923, 36.576, 36.438, 36.353, 37.921, 36.987, 36.958, 37.211, 38.134, 36.571, 36.677, 37.6, 36.644, 36.249, 37.761, 36.994, 37.22, 37.776, 38.595, 36.46, 38.811, 38.506, 38.01, 38.618]
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