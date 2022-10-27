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
                text: 'SSIM to Frame Number: Sequence # 5'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: 'SSIM'
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
		data: [0.906, 0.873, 0.938, 0.857, 0.863, 0.866, 0.932, 0.938, 0.924, 0.951, 0.906, 0.948, 0.925, 0.899, 0.902, 0.892, 0.888, 0.884, 0.88, 0.923, 0.924, 0.925, 0.926, 0.939, 0.918, 0.902, 0.965, 0.96, 0.917, 0.952]
},{
		name: 'ST-Deint',
		data: [0.903, 0.917, 0.917, 0.907, 0.899, 0.904, 0.883, 0.959, 0.95, 0.967, 0.96, 0.965, 0.933, 0.933, 0.931, 0.925, 0.937, 0.919, 0.916, 0.944, 0.946, 0.947, 0.947, 0.957, 0.945, 0.93, 0.939, 0.972, 0.95, 0.967]
},{
		name: 'PAL Interpolation',
		data: [0.931, 0.859, 0.911, 0.859, 0.841, 0.867, 0.95, 0.953, 0.921, 0.921, 0.89, 0.925, 0.906, 0.878, 0.881, 0.87, 0.86, 0.87, 0.876, 0.9, 0.897, 0.913, 0.909, 0.895, 0.895, 0.905, 0.924, 0.928, 0.913, 0.899]
},{
		name: 'SonyVegas Blend Field',
		data: [0.877, 0.846, 0.916, 0.84, 0.844, 0.834, 0.762, 0.844, 0.9, 0.927, 0.88, 0.914, 0.879, 0.854, 0.848, 0.826, 0.839, 0.804, 0.801, 0.838, 0.833, 0.818, 0.806, 0.827, 0.827, 0.818, 0.911, 0.929, 0.856, 0.9]
},{
		name: 'Vapoursynth EEDI3',
		data: [0.91, 0.878, 0.94, 0.863, 0.869, 0.872, 0.935, 0.94, 0.926, 0.954, 0.909, 0.95, 0.928, 0.903, 0.906, 0.896, 0.891, 0.888, 0.884, 0.926, 0.927, 0.927, 0.929, 0.941, 0.921, 0.905, 0.966, 0.961, 0.921, 0.954]
},{
		name: 'TDAN',
		data: [0.916, 0.893, 0.94, 0.877, 0.88, 0.883, 0.935, 0.943, 0.931, 0.957, 0.923, 0.95, 0.931, 0.912, 0.909, 0.903, 0.9, 0.89, 0.886, 0.921, 0.925, 0.925, 0.924, 0.934, 0.916, 0.903, 0.967, 0.962, 0.924, 0.948]
},{
		name: 'Bob',
		data: [0.916, 0.886, 0.945, 0.873, 0.879, 0.882, 0.941, 0.944, 0.931, 0.957, 0.915, 0.953, 0.933, 0.909, 0.912, 0.902, 0.898, 0.896, 0.891, 0.931, 0.932, 0.931, 0.933, 0.944, 0.925, 0.91, 0.968, 0.963, 0.926, 0.956]
},{
		name: 'Motion and Area Pixel Deinterlacer',
		data: [0.887, 0.876, 0.896, 0.854, 0.849, 0.862, 0.934, 0.934, 0.914, 0.919, 0.91, 0.931, 0.896, 0.895, 0.885, 0.872, 0.882, 0.864, 0.869, 0.883, 0.909, 0.909, 0.907, 0.906, 0.901, 0.878, 0.921, 0.919, 0.898, 0.908]
},{
		name: 'DfRes SA',
		data: [0.927, 0.903, 0.949, 0.889, 0.889, 0.879, 0.942, 0.951, 0.94, 0.961, 0.927, 0.959, 0.94, 0.924, 0.925, 0.916, 0.915, 0.904, 0.901, 0.936, 0.937, 0.939, 0.939, 0.948, 0.932, 0.917, 0.971, 0.967, 0.934, 0.946]
},{
		name: 'DfRes 122000 G2e 3',
		data: [0.927, 0.902, 0.951, 0.89, 0.89, 0.891, 0.935, 0.948, 0.937, 0.956, 0.923, 0.958, 0.939, 0.921, 0.922, 0.913, 0.911, 0.902, 0.898, 0.934, 0.935, 0.937, 0.937, 0.947, 0.931, 0.916, 0.97, 0.967, 0.933, 0.943]
},{
		name: 'SwinDI',
		data: [0.951, 0.931, 0.969, 0.925, 0.927, 0.923, 0.961, 0.964, 0.953, 0.97, 0.944, 0.966, 0.948, 0.937, 0.938, 0.93, 0.933, 0.929, 0.929, 0.952, 0.952, 0.954, 0.952, 0.959, 0.948, 0.935, 0.976, 0.973, 0.949, 0.967]
},{
		name: 'YADIF',
		data: [0.923, 0.896, 0.952, 0.882, 0.886, 0.882, 0.943, 0.946, 0.934, 0.959, 0.92, 0.954, 0.932, 0.911, 0.913, 0.903, 0.902, 0.899, 0.895, 0.932, 0.934, 0.931, 0.932, 0.942, 0.925, 0.91, 0.967, 0.964, 0.928, 0.949]
},{
		name: 'SonyVegas Interpolate Field',
		data: [0.916, 0.886, 0.945, 0.873, 0.879, 0.882, 0.941, 0.944, 0.931, 0.957, 0.915, 0.953, 0.933, 0.909, 0.912, 0.902, 0.898, 0.895, 0.891, 0.931, 0.932, 0.931, 0.933, 0.944, 0.925, 0.91, 0.968, 0.963, 0.926, 0.956]
},{
		name: 'EDVR',
		data: [0.919, 0.892, 0.945, 0.882, 0.882, 0.882, 0.937, 0.944, 0.932, 0.958, 0.922, 0.953, 0.936, 0.917, 0.915, 0.909, 0.905, 0.896, 0.892, 0.928, 0.93, 0.932, 0.932, 0.941, 0.924, 0.911, 0.969, 0.965, 0.927, 0.936]
},{
		name: 'MFDIN L',
		data: [0.948, 0.928, 0.966, 0.922, 0.925, 0.92, 0.957, 0.962, 0.951, 0.968, 0.943, 0.966, 0.949, 0.936, 0.936, 0.928, 0.93, 0.927, 0.924, 0.949, 0.951, 0.952, 0.951, 0.959, 0.946, 0.934, 0.976, 0.974, 0.948, 0.968]
},{
		name: 'Adobe Premiere Pro Built-In',
		data: [0.805, 0.838, 0.868, 0.841, 0.762, 0.718, 0.092, 0.787, 0.816, 0.889, 0.883, 0.894, 0.85, 0.838, 0.808, 0.789, 0.823, 0.692, 0.656, 0.692, 0.68, 0.692, 0.698, 0.717, 0.772, 0.765, 0.833, 0.827, 0.806, 0.841]
},{
		name: 'MSU Deinterlacer',
		data: [0.917, 0.9, 0.949, 0.887, 0.885, 0.886, 0.937, 0.945, 0.933, 0.958, 0.927, 0.957, 0.938, 0.921, 0.92, 0.911, 0.911, 0.9, 0.894, 0.93, 0.932, 0.931, 0.935, 0.943, 0.928, 0.914, 0.965, 0.962, 0.929, 0.953]
},{
		name: 'ASVZZZ Deinterlacer',
		data: [0.886, 0.883, 0.905, 0.865, 0.863, 0.87, 0.942, 0.937, 0.919, 0.926, 0.914, 0.936, 0.907, 0.9, 0.893, 0.882, 0.889, 0.881, 0.881, 0.894, 0.914, 0.915, 0.914, 0.914, 0.906, 0.888, 0.924, 0.918, 0.904, 0.918]
},{
		name: 'Vapoursynth TDeintMod',
		data: [0.907, 0.874, 0.938, 0.858, 0.863, 0.866, 0.933, 0.937, 0.924, 0.951, 0.908, 0.948, 0.926, 0.901, 0.904, 0.892, 0.887, 0.883, 0.879, 0.922, 0.923, 0.924, 0.925, 0.938, 0.917, 0.901, 0.965, 0.959, 0.917, 0.952]
},{
		name: 'DfRes',
		data: [0.924, 0.895, 0.95, 0.881, 0.887, 0.889, 0.942, 0.949, 0.937, 0.96, 0.922, 0.957, 0.937, 0.917, 0.918, 0.908, 0.905, 0.901, 0.898, 0.935, 0.936, 0.937, 0.938, 0.949, 0.931, 0.916, 0.971, 0.968, 0.931, 0.961]
},{
		name: 'Kernel Deinterlacer (optimal parameters)',
		data: [0.915, 0.881, 0.933, 0.868, 0.873, 0.877, 0.938, 0.941, 0.928, 0.949, 0.915, 0.949, 0.925, 0.906, 0.908, 0.898, 0.896, 0.891, 0.886, 0.918, 0.922, 0.922, 0.925, 0.933, 0.917, 0.903, 0.956, 0.954, 0.92, 0.948]
},{
		name: 'Weston 3-Field Deinterlacer',
		data: [0.889, 0.869, 0.927, 0.856, 0.863, 0.868, 0.929, 0.932, 0.922, 0.948, 0.906, 0.945, 0.922, 0.898, 0.901, 0.889, 0.886, 0.881, 0.873, 0.904, 0.908, 0.911, 0.912, 0.923, 0.906, 0.893, 0.952, 0.955, 0.918, 0.948]
},{
		name: 'FLAD',
		data: [0.947, 0.927, 0.967, 0.922, 0.925, 0.921, 0.954, 0.961, 0.953, 0.969, 0.942, 0.967, 0.95, 0.936, 0.937, 0.929, 0.932, 0.928, 0.924, 0.95, 0.95, 0.951, 0.951, 0.959, 0.947, 0.935, 0.977, 0.975, 0.948, 0.968]
},{
		name: 'Bob-Weave Deinterlacer',
		data: [0.909, 0.877, 0.937, 0.86, 0.864, 0.864, 0.931, 0.937, 0.924, 0.952, 0.91, 0.948, 0.925, 0.901, 0.904, 0.894, 0.888, 0.881, 0.877, 0.921, 0.922, 0.921, 0.923, 0.936, 0.916, 0.901, 0.964, 0.96, 0.918, 0.949]
},{
		name: 'DUF',
		data: [0.92, 0.898, 0.947, 0.886, 0.889, 0.886, 0.939, 0.947, 0.934, 0.958, 0.92, 0.954, 0.934, 0.913, 0.915, 0.907, 0.905, 0.899, 0.894, 0.93, 0.933, 0.932, 0.935, 0.944, 0.926, 0.912, 0.969, 0.964, 0.928, 0.935]
},{
		name: 'EDVR_woTSA',
		data: [0.916, 0.889, 0.944, 0.874, 0.879, 0.88, 0.941, 0.947, 0.931, 0.956, 0.919, 0.955, 0.934, 0.911, 0.915, 0.906, 0.902, 0.894, 0.888, 0.928, 0.929, 0.931, 0.933, 0.942, 0.923, 0.911, 0.969, 0.965, 0.928, 0.936]
},{
		name: 'Motion Compensation Deinterlacer',
		data: [0.807, 0.751, 0.953, 0.743, 0.888, 0.702, 0.931, 0.776, 0.928, 0.835, 0.909, 0.833, 0.916, 0.745, 0.903, 0.685, 0.894, 0.627, 0.885, 0.627, 0.925, 0.652, 0.924, 0.645, 0.917, 0.659, 0.956, 0.816, 0.921, 0.768]
},{
		name: 'MFDIN',
		data: [0.912, 0.877, 0.944, 0.861, 0.866, 0.864, 0.926, 0.939, 0.921, 0.951, 0.907, 0.945, 0.914, 0.89, 0.89, 0.876, 0.883, 0.875, 0.869, 0.918, 0.92, 0.922, 0.922, 0.934, 0.915, 0.893, 0.961, 0.958, 0.918, 0.949]
},{
		name: 'Real-Time Deep Deinterlacer',
		data: [0.913, 0.883, 0.943, 0.868, 0.874, 0.877, 0.935, 0.938, 0.927, 0.953, 0.911, 0.951, 0.928, 0.905, 0.907, 0.897, 0.894, 0.891, 0.886, 0.926, 0.927, 0.928, 0.93, 0.942, 0.923, 0.908, 0.967, 0.963, 0.924, 0.955]
},{
		name: 'Muksun Deinterlacer',
		data: [0.886, 0.883, 0.905, 0.865, 0.863, 0.87, 0.942, 0.937, 0.919, 0.926, 0.914, 0.936, 0.907, 0.9, 0.893, 0.882, 0.889, 0.881, 0.881, 0.894, 0.914, 0.915, 0.914, 0.914, 0.906, 0.888, 0.924, 0.918, 0.904, 0.918]
},{
		name: 'Kernel Deinterlacer',
		data: [0.915, 0.882, 0.91, 0.861, 0.86, 0.871, 0.935, 0.941, 0.924, 0.931, 0.917, 0.939, 0.908, 0.901, 0.896, 0.888, 0.893, 0.878, 0.876, 0.897, 0.915, 0.915, 0.918, 0.919, 0.91, 0.897, 0.941, 0.939, 0.916, 0.925]
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