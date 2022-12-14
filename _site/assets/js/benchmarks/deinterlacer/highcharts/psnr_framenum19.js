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
                text: 'PSNR to Frame Number: Sequence # 19'
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
		data: [45.744, 44.966, 44.302, 47.465, 46.926, 43.75, 45.52, 47.953, 48.581, 48.833, 46.294, 46.149, 43.369, 46.39, 43.23, 46.021, 44.679, 43.263, 42.06, 44.372, 44.481, 42.199, 40.877, 40.547, 41.597, 41.603, 41.766, 41.503, 42.157, 42.129]
},{
		name: 'ST-Deint',
		data: [47.122, 46.434, 45.151, 48.546, 48.418, 45.386, 45.824, 49.009, 49.348, 49.726, 48.86, 47.414, 47.812, 47.642, 46.964, 47.191, 46.044, 44.596, 43.311, 45.745, 46.866, 43.632, 42.144, 42.045, 43.174, 42.962, 43.327, 46.398, 43.662, 43.406]
},{
		name: 'PAL Interpolation',
		data: [40.267, 35.675, 35.197, 36.822, 36.528, 34.565, 35.705, 36.371, 37.253, 37.505, 36.703, 35.758, 34.757, 36.373, 34.832, 35.949, 35.664, 35.37, 35.074, 35.343, 35.139, 34.578, 34.288, 33.839, 33.944, 33.7, 33.976, 34.452, 33.895, 34.125]
},{
		name: 'SonyVegas Blend Field',
		data: [28.371, 27.476, 31.308, 26.877, 27.307, 31.316, 28.888, 29.234, 27.034, 27.351, 26.87, 30.269, 27.974, 27.783, 29.79, 27.615, 29.036, 28.132, 28.278, 29.326, 29.334, 28.664, 29.415, 28.643, 29.923, 30.605, 30.682, 38.733, 30.441, 30.564]
},{
		name: 'Vapoursynth EEDI3',
		data: [45.228, 44.574, 44.019, 47.187, 46.508, 43.285, 44.982, 47.744, 48.327, 48.604, 45.934, 45.63, 42.95, 46.242, 42.65, 45.714, 44.233, 42.664, 41.728, 43.885, 44.011, 41.77, 40.442, 40.147, 41.107, 41.152, 41.39, 41.072, 41.663, 41.693]
},{
		name: 'TDAN',
		data: [36.641, 41.838, 37.746, 40.117, 37.737, 38.138, 44.907, 40.101, 39.666, 39.618, 42.36, 37.337, 37.184, 41.566, 39.626, 42.585, 35.445, 39.448, 38.619, 38.73, 40.026, 38.763, 40.619, 40.823, 41.704, 41.573, 41.568, 45.33, 42.156, 35.054]
},{
		name: 'Bob',
		data: [44.241, 43.621, 43.117, 46.836, 46.005, 42.274, 44.316, 47.045, 47.878, 48.165, 45.204, 44.843, 41.915, 45.861, 41.862, 44.8, 43.075, 41.824, 41.086, 42.641, 42.689, 40.606, 39.697, 39.344, 40.152, 40.138, 40.456, 40.189, 40.644, 40.716]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [39.381, 38.196, 38.196, 40.072, 39.523, 37.38, 38.83, 40.223, 40.522, 40.52, 39.112, 38.822, 36.681, 39.615, 37.081, 38.597, 37.951, 37.249, 37.06, 37.616, 37.553, 36.74, 36.247, 35.876, 36.171, 35.865, 36.31, 40.881, 36.321, 36.537]
},{
		name: 'DfRes SA',
		data: [46.829, 45.928, 44.961, 47.968, 47.478, 46.001, 46.553, 48.553, 49.168, 49.433, 46.716, 46.747, 44.09, 47.095, 44.16, 46.546, 45.422, 44.194, 42.955, 45.149, 44.772, 43.083, 43.803, 43.434, 44.579, 43.943, 42.868, 45.429, 44.765, 38.981]
},{
		name: 'DfRes 122000 G2e 3',
		data: [46.57, 45.746, 44.783, 47.783, 47.337, 45.958, 46.388, 48.331, 48.926, 49.101, 46.628, 46.49, 43.883, 46.902, 44.028, 46.368, 45.251, 43.999, 42.832, 44.997, 44.678, 42.967, 43.607, 43.183, 44.171, 43.619, 42.755, 45.664, 44.481, 40.084]
},{
		name: 'SwinDI',
		data: [46.209, 45.572, 44.667, 47.414, 47.075, 44.477, 45.988, 47.997, 48.562, 48.712, 46.412, 46.439, 43.819, 46.582, 43.633, 46.265, 45.335, 43.701, 42.463, 45.002, 44.972, 42.87, 41.399, 41.057, 42.333, 42.395, 42.48, 42.221, 42.928, 42.766]
},{
		name: 'YADIF',
		data: [42.075, 41.757, 41.126, 44.22, 43.675, 40.187, 42.339, 44.463, 45.316, 45.603, 43.266, 42.689, 39.984, 43.705, 40.06, 43.241, 41.934, 40.949, 40.325, 41.561, 41.384, 40.12, 39.097, 38.543, 38.991, 38.937, 39.091, 39.112, 39.243, 38.737]
},{
		name: 'SonyVegas Interpolate Field',
		data: [44.218, 43.603, 43.103, 46.803, 45.968, 42.261, 44.292, 47.01, 47.834, 48.116, 45.179, 44.822, 41.905, 45.826, 41.849, 44.773, 43.058, 41.811, 41.077, 42.627, 42.675, 40.597, 39.689, 39.337, 40.142, 40.131, 40.449, 40.18, 40.636, 40.708]
},{
		name: 'EDVR',
		data: [36.91, 40.814, 35.859, 39.784, 37.513, 37.044, 42.045, 38.871, 39.958, 40.543, 41.776, 36.222, 38.519, 42.333, 39.63, 40.935, 34.23, 40.445, 37.834, 37.407, 39.634, 40.44, 41.385, 40.889, 42.009, 41.651, 41.242, 45.799, 42.159, 34.983]
},{
		name: 'MFDIN L',
		data: [47.619, 46.419, 45.31, 48.023, 47.739, 46.723, 46.962, 48.627, 49.203, 49.375, 46.97, 47.033, 44.495, 47.242, 44.614, 46.693, 45.818, 44.977, 44.223, 46.061, 45.605, 44.254, 45.627, 44.816, 46.256, 45.624, 44.404, 47.631, 46.161, 44.305]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [25.556, 24.686, 28.738, 24.03, 24.482, 28.886, 26.044, 26.414, 24.196, 24.48, 24.044, 27.531, 25.335, 24.902, 27.206, 24.714, 26.234, 25.346, 25.49, 26.549, 26.618, 25.917, 26.738, 25.99, 27.29, 28.071, 28.097, 39.065, 27.87, 27.95]
},{
		name: 'MSU Deinterlacer',
		data: [42.844, 41.441, 40.006, 43.326, 41.875, 40.829, 41.024, 42.686, 44.641, 45.153, 41.633, 41.383, 39.359, 41.32, 39.693, 40.757, 41.173, 40.397, 40.67, 41.717, 41.29, 41.156, 41.664, 40.734, 42.281, 42.022, 40.622, 43.318, 42.772, 39.537]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [39.44, 39.212, 38.916, 39.971, 39.862, 38.509, 39.557, 40.25, 40.365, 40.428, 39.649, 39.63, 37.815, 39.888, 38.186, 39.538, 39.167, 38.61, 38.28, 38.969, 38.838, 38.159, 37.422, 37.027, 37.376, 37.456, 37.551, 39.389, 37.693, 37.793]
},{
		name: 'Vapoursynth TDeintMod',
		data: [45.246, 44.509, 43.868, 47.461, 46.782, 43.384, 45.197, 47.773, 48.459, 48.711, 46.019, 45.831, 42.816, 46.438, 42.705, 45.611, 44.046, 42.628, 41.666, 43.666, 43.786, 41.301, 40.206, 39.859, 40.872, 40.925, 41.137, 40.896, 41.524, 41.484]
},{
		name: 'DfRes',
		data: [46.064, 44.96, 44.176, 47.674, 46.764, 44.306, 44.961, 48.136, 49.102, 49.427, 45.525, 45.647, 43.528, 46.752, 42.493, 45.724, 44.906, 43.655, 42.618, 44.705, 43.45, 42.454, 43.93, 42.995, 44.22, 43.59, 42.488, 46.22, 44.279, 43.03]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [44.156, 42.879, 42.471, 45.132, 45.074, 41.786, 43.293, 45.217, 46.061, 46.708, 44.378, 44.013, 41.3, 44.72, 41.333, 43.755, 42.438, 41.225, 40.66, 41.811, 41.963, 40.194, 39.237, 38.924, 39.586, 39.573, 39.815, 39.826, 39.958, 40.066]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [43.054, 43.312, 43.149, 45.333, 45.681, 42.73, 43.381, 45.311, 46.448, 47.339, 45.201, 44.674, 42.107, 44.783, 42.067, 43.965, 42.877, 41.845, 41.272, 41.952, 42.241, 40.673, 39.934, 39.257, 39.605, 39.637, 39.987, 42.269, 39.921, 40.123]
},{
		name: 'FLAD',
		data: [47.276, 46.537, 45.425, 48.337, 48.044, 46.475, 47.116, 49.033, 49.658, 49.899, 47.252, 47.231, 44.628, 47.452, 44.707, 46.957, 45.944, 44.891, 43.388, 45.725, 45.475, 43.766, 44.977, 44.419, 45.829, 45.186, 43.671, 47.003, 45.829, 44.209]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [44.367, 44.208, 43.68, 47.063, 46.478, 43.429, 44.831, 47.21, 48.043, 48.205, 45.525, 45.271, 42.793, 46.11, 42.717, 45.195, 43.53, 42.448, 41.545, 43.247, 43.2, 41.318, 40.605, 40.273, 40.826, 40.72, 40.711, 42.128, 41.206, 41.292]
},{
		name: 'DUF',
		data: [39.089, 41.598, 39.166, 39.992, 37.792, 39.443, 41.827, 41.56, 40.447, 40.373, 41.035, 38.363, 38.021, 41.394, 39.165, 41.092, 36.621, 39.076, 38.363, 38.771, 39.415, 39.257, 40.244, 40.6, 41.732, 41.398, 41.356, 44.537, 42.068, 34.964]
},{
		name: 'EDVR_woTSA',
		data: [36.562, 38.788, 38.421, 39.749, 37.467, 36.85, 41.881, 39.708, 39.482, 40.64, 42.808, 37.188, 39.299, 42.146, 39.01, 42.786, 35.054, 40.984, 39.379, 38.278, 41.132, 41.807, 41.162, 40.417, 41.284, 41.212, 41.835, 45.864, 42.595, 34.977]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [25.577, 23.59, 32.645, 21.47, 35.285, 26.373, 36.024, 23.865, 37.235, 21.947, 36.426, 24.949, 36.102, 22.364, 36.219, 22.108, 37.233, 22.766, 36.897, 24.012, 36.108, 23.503, 34.769, 23.776, 34.844, 26.049, 34.017, 34.571, 36.779, 25.602]
},{
		name: 'MFDIN',
		data: [42.794, 41.898, 41.318, 42.829, 42.55, 41.771, 42.165, 43.278, 43.553, 43.595, 42.585, 42.454, 40.575, 42.545, 40.496, 42.563, 42.168, 41.622, 41.038, 42.106, 41.634, 40.948, 41.608, 40.714, 41.273, 40.707, 40.044, 42.903, 41.362, 40.384]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [45.3, 44.596, 43.739, 46.873, 46.351, 43.484, 44.95, 47.165, 47.788, 48.005, 45.74, 45.482, 42.995, 45.884, 42.904, 45.41, 44.175, 42.893, 41.63, 43.901, 43.874, 41.583, 40.551, 40.256, 41.238, 41.229, 41.263, 41.913, 41.792, 41.7]
},{
		name: 'Muksun Deinterlacer',
		data: [39.44, 39.212, 38.916, 39.971, 39.862, 38.509, 39.557, 40.25, 40.365, 40.428, 39.649, 39.63, 37.815, 39.888, 38.186, 39.538, 39.167, 38.61, 38.28, 38.969, 38.838, 38.159, 37.422, 37.027, 37.376, 37.456, 37.551, 39.389, 37.693, 37.793]
},{
		name: 'Kernel Deinterlacer',
		data: [44.156, 41.175, 40.915, 42.352, 42.459, 40.698, 41.105, 42.151, 42.763, 43.076, 42.071, 41.482, 39.844, 41.794, 40.277, 40.801, 40.618, 39.765, 39.33, 40.244, 40.366, 39.054, 38.235, 37.992, 38.582, 38.681, 38.773, 39.923, 38.873, 39.013]
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