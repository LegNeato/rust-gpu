searchState.loadedDescShard("spirv_std", 0, "<code>spirv-std</code>\nA macro for creating SPIR-V <code>OpTypeImage</code> types. Always …\nDynamically-sized arrays in Rust carry around their length …\nAn opaque reference to settings that describe how to …\nExplicit (uniform/storage) buffer handle for descriptor …\nSPIR-V Intrinsics\nContainer for an untyped blob of data.\nTraits and helper functions related to floats.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nImage types\nIndex the array. Unfortunately, because the length of the …\nIndex the array, returning a mutable reference to an …\nIndirect command structs from vulkan\nTraits related to integers.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPublic re-export of the <code>spirv-std-macros</code> crate.\nTypes for handling memory ordering constraints for …\nTraits and helper functions related to numbers.\nConstructs an uninitialized ray query variable. Using the …\nRay-tracing data types\nTraits related to scalars.\nReplaces all (nested) occurrences of the <code>#[spirv(..)]</code> …\nTraits related to vectors.\nThe <code>GroupOperation</code> <code>ClusteredReduce</code>.\nA Direction of 2 indicates a diagonal swap;\nA binary operation with an identity I and n (where n is …\nDefines the class of group operation.\nA Direction of 0 indicates a horizontal swap;\nA binary operation with an identity I and n (where n is …\nIndex into an array without bounds checking.\nReserved.\nReserved.\nReserved.\nDirection is the kind of swap to perform.\nA reduction operation for all values of a specific value X …\n<code>SubgroupMask</code> is a <code>glam::UVec4</code> representing a bitmask of …\nA Direction of 1 indicates a vertical swap;\nResult is true if all components of <code>vector</code> is true, …\nBlocks execution of all threads in a group until all …\nBlocks execution of all threads in a group until all …\nResult is true if any component of <code>vector</code> is true, …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nAtomically load through <code>ptr</code> using the given <code>SEMANTICS</code>. All …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nAtomically store through <code>ptr</code> using the given <code>SEMANTICS</code>. …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nPerform the following steps atomically with respect to any …\nWait for other invocations of this module to reach the …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nReturns the partial derivative of <code>component</code> with respect …\nDemote fragment shader invocation to a helper invocation. …\nBlocks execution of all threads in a group until all …\nBlocks execution of all threads in a group until all …\nEmits the current values of all output variables to the …\nEmits the current values of all output variables to the …\nFinish the current primitive and start a new one. No …\nFinish the current primitive and start a new one. No …\nInvoke a callable shader.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the sum of the absolute values of <code>ddx</code> and <code>ddy</code> as a …\nReturns the sum of the absolute values of <code>ddx_coarse</code> and …\nReturns the sum of the absolute values of <code>ddx_coarse</code> and …\nReturns the sum of the absolute values of <code>ddx_fine</code> and …\nReturns the sum of the absolute values of <code>ddx_fine</code> and …\nReturns the sum of the absolute values of <code>ddx</code> and <code>ddy</code> as a …\nIgnores the current potential intersection, terminating …\nReturns a reference to the element at <code>index</code>. The …\nReturns a mutable reference to the element at <code>index</code>. The …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the invocation is currently a helper …\nFragment-shader discard. Equivalvent to <code>discard()</code> from GLSL\nControl the order that memory accesses are observed.\nReports an intersection back to the traversal …\nCompute the maximum of two signed integers via a GLSL …\nCompute the minimum of two signed integers via a GLSL …\nEvaluates a predicate for all active invocations in the …\nEvaluates a value for all active invocations in the group. …\nA bitwise and group operation of all Value operands …\nEvaluates a predicate for all active invocations in the …\nResult is a bitfield value combining the Predicate value …\nResult is the number of bits that are set to 1 in Value, …\nEvaluates a value for all active invocations in the group, …\nResult is the number of bits that are set to 1 in Value, …\nFind the least significant bit set to 1 in Value, …\nFind the most significant bit set to 1 in Value, …\nResult is the number of bits that are set to 1 in Value, …\nOnly usable if the extension GL_KHR_shader_subgroup_basic …\nResult is the Value of the invocation identified by the id …\nResult is the Value of the invocation from the active …\nA bitwise and group operation of all Value operands …\nA floating point add group operation of all Value operands …\nA floating point maximum group operation of all Value …\nA floating point minimum group operation of all Value …\nA floating point multiply group operation of all Value …\nAn integer add group operation of all Value operands …\nAn integer multiply group operation of all Value operands …\nA logical and group operation of all Value operands …\nA logical or group operation of all Value operands …\nA logical xor group operation of all Value operands …\nA bitwise or group operation of all Value operands …\nA signed integer maximum group operation of all Value …\nA signed integer minimum group operation of all Value …\nAn unsigned integer maximum group operation of all Value …\nAn unsigned integer minimum group operation of all Value …\nA bitwise xor group operation of all Value operands …\nResult is true only in the active invocation with the …\nA bitwise and group operation of all Value operands …\nA floating point add group operation of all Value operands …\nA floating point maximum group operation of all Value …\nA floating point minimum group operation of all Value …\nA floating point multiply group operation of all Value …\nAn integer add group operation of all Value operands …\nAn integer multiply group operation of all Value operands …\nA logical and group operation of all Value operands …\nA logical or group operation of all Value operands …\nA logical xor group operation of all Value operands …\nA bitwise or group operation of all Value operands …\nA signed integer maximum group operation of all Value …\nA signed integer minimum group operation of all Value …\nAn unsigned integer maximum group operation of all Value …\nAn unsigned integer minimum group operation of all Value …\nA bitwise xor group operation of all Value operands …\nA floating point add group operation of all Value operands …\nA floating point maximum group operation of all Value …\nA floating point minimum group operation of all Value …\nA floating point multiply group operation of all Value …\nAn integer add group operation of all Value operands …\nAn integer multiply group operation of all Value operands …\nA bitwise and group operation of all Value operands …\nA floating point add group operation of all Value operands …\nA floating point maximum group operation of all Value …\nA floating point minimum group operation of all Value …\nA floating point multiply group operation of all Value …\nAn integer add group operation of all Value operands …\nAn integer multiply group operation of all Value operands …\nA logical and group operation of all Value operands …\nA logical or group operation of all Value operands …\nA logical xor group operation of all Value operands …\nA bitwise or group operation of all Value operands …\nA signed integer maximum group operation of all Value …\nA signed integer minimum group operation of all Value …\nAn unsigned integer maximum group operation of all Value …\nAn unsigned integer minimum group operation of all Value …\nA bitwise xor group operation of all Value operands …\nEvaluates a value for all active invocations in the group, …\nA logical and group operation of all Value operands …\nA logical or group operation of all Value operands …\nA logical xor group operation of all Value operands …\nOnly usable if the extension GL_KHR_shader_subgroup_basic …\nOnly usable if the extension GL_KHR_shader_subgroup_basic …\nOnly usable if the extension GL_KHR_shader_subgroup_basic …\nOnly usable if the extension GL_KHR_shader_subgroup_basic …\nA bitwise or group operation of all Value operands …\nResult is the Value of the invocation within the quad with …\nSwap the Value of the invocation within the quad with …\nA signed integer maximum group operation of all Value …\nA signed integer minimum group operation of all Value …\nResult is the Value of the invocation identified by the id …\nResult is the Value of the invocation identified by the …\nResult is the Value of the invocation identified by the …\nResult is the Value of the invocation identified by the …\nAn unsigned integer maximum group operation of all Value …\nAn unsigned integer minimum group operation of all Value …\nA bitwise xor group operation of all Value operands …\nTerminates the invocation that executes it, stops the ray …\nCompute the maximum of two unsigned integers via a GLSL …\nCompute the minimum of two unsigned integers via a GLSL …\nExtract a single, dynamically selected, component of a …\nMake a copy of a vector, with a single, variably selected, …\nBlocks execution of all threads in a group until all group …\nBlocks execution of all threads in a group until all group …\n<code>ByteAddressableBuffer</code> is a view to an untyped blob of …\nCreate a non-mutable <code>ByteAddressableBuffer</code> from this …\nThe underlying array of bytes, able to be directly …\nReturns the argument unchanged.\nCreates a <code>ByteAddressableBuffer</code> from the untyped blob of …\nCreates a <code>ByteAddressableBuffer</code> from the untyped blob of …\nCalls <code>U::from(self)</code>.\nLoads an arbitrary type from the buffer. <code>byte_index</code> must …\nLoads an arbitrary type from the buffer. <code>byte_index</code> must …\nLoads an arbitrary type from the buffer. <code>byte_index</code> must …\nLoads an arbitrary type from the buffer. <code>byte_index</code> must …\nStores an arbitrary type into the buffer. <code>byte_index</code> must …\nStores an arbitrary type into the buffer. <code>byte_index</code> must …\nAbstract trait representing a SPIR-V floating point type.\nWidth of the float, in bits.\nConverts an f16 (half) into an f32 (float). The parameter …\nConverts two f16 values (halfs) into two f32 values …\nConverts an f32 (float) into an f16 (half). The result is …\nUnpacks 2 16-bit signed integers into a vec2. See …\nUnpacks 2 16-bit unsigned integers into a vec2. See …\nUnpacks 4 8-bit signed integers into a vec4. See …\nUnpacks 4 8-bit unsigned integers into a vec4. See …\nConverts two f32 values (floats) into two f16 values …\nPacks a vec2 into 2 16-bit signed integers. See …\nPacks a vec2 into 2 16-bit unsigned integers. See …\nPacks a vec4 into 4 8-bit signed integers. See PackSnorm4x8…\nPacks a vec4 into 4 8-bit unsigned integers. See …\nThe access permissions for the image.\nWhether the image uses arrayed content.\n1D Buffer texture\n2D Cubemap texture\nA cubemap, i.e. a cube of 6 textures, sampled using a …\nThe dimension of the image.\nThe image uses not arrayed content.\nIndicates that the image does not contain depth …\nThe image contains single-sampled content.\nThis is a marker trait to represent the constraints on …\nThis is a marker trait to represent the constraints on …\nThis is a marker trait to represent the constraints on …\nThis is a marker trait to represent the constraints on …\nAn opaque image type. Corresponds to <code>OpTypeImage</code>.\nA macro for creating SPIR-V <code>OpTypeImage</code> types. Always …\nA 1d image used with a sampler.\nAn array of 1d images, used with a sampler.\nA 1d image used with a sampler, containing signed integer …\nAn array of 1d images, used with a sampler, each …\nA 1d image used with a sampler, containing unsigned …\nAn array of 1d images, used with a sampler, each …\nA 2d image used with a sampler. This is pretty typical and …\nAn array of 2d images, used with a sampler.\nA 2d image used with a sampler, containing signed integer …\nAn array of 2d images, used with a sampler, each …\nA 2d image used with a sampler, containing unsigned …\nAn array of 2d images, used with a sampler, each …\nA 3d image used with a sampler.\nAn array of 3d images, used with a sampler.\nA 3d image used with a sampler, containing signed integer …\nAn array of 3d images, used with a sampler, each …\nA 3d image used with a sampler, containing unsigned …\nAn array of 3d images, used with a sampler, each …\nMarker trait for arguments that accept a coordinate for an …\nMarker trait for arguments that are valid for a …\nWhether a given image contains depth information. <strong>Note</strong> …\nThe underlying internal representation of the image.\nHelper trait that defines all <code>*_with</code> methods on an <code>Image</code> …\nWhether the image uses arrayed content.\nThe image will not be used with a sampler.\n1D\n32 bits containing two 11 bit floating point numbers for …\nSingle red channel, 16 bit unsigned normalized integer.\nSingle red channel, 16 bit signed normalized integer.\nSingle red channel, 16 bit floating point.\nSingle red channel, 16 bit signed integer (not normalized).\nSingle red channel, 16 bit unsigned integer (not …\nSingle red channel, 32 bit floating point.\nSingle red channel, 32 bit signed integer (not normalized).\nSingle red channel, 32 bit unsigned integer (not …\nSingle red channel, 64 bit signed integer (not normalized).\nSingle red channel, 64 bit unsigned integer (not …\nSingle red channel, 8 bit unsigned normalized integer.\nSingle red channel, 8 bit signed normalized integer.\nSingle red channel, 8 bit signed integer (not normalized).\nSingle red channel, 8 bit unsigned integer (not …\nA read only image.\nA readable and writable image.\n2D Rectangle texture\nRed+Green channels, 16 bit unsigned normalized integer per …\nRed+Green channels, 16 bit signed normalized integer per …\nRed+Green channels, 16 bit floating point per channel.\nRed+Green channels, 16 bit signed integer per channel (not …\nRed+Green channels, 16 bit unsigned integer per channel …\nRed+Green channels, 32 bit floating point per channel.\nRed+Green channels, 32 bit signed integer per channel (not …\nRed+Green channels, 32 bit unsigned integer per channel …\nRed+Green channels, 8 bit unsigned normalized integer per …\nRed+Green channels, 8 bit signed normalized integer per …\nRed+Green channels, 8 bit signed integer per channel (not …\nRed+Green channels, 8 bit unsigned integer per channel …\n32 bits containing three 10 bit unsigned normalized …\n32 bits containing three 10 bit unsigned integers for the …\nRGBA channels, 16 bit unsigned normalized integer per …\nRGBA channels, 16 bit signed normalized integer per …\nRGBA channels, 16 bit floating point per channel.\nRGBA channels, 16 bit signed integer per channel (not …\nRGBA channels, 16 bit unsigned integer per channel (not …\nRGBA channels, 32 bit floating point per channel.\nRGBA channels, 32 bit signed integer per channel (not …\nRGBA channels, 32 bit unsigned integer per channel (not …\nRGBA channels, 8 bit unsigned normalized integer per …\nRGBA channels, 8 bit signed normalized integer per channel.\nRGBA channels, 8 bit signed integer per channel (not …\nRGBA channels, 8 bit unsigned integer per channel (not …\nThe default vector/scalar of this sample type\nMarker trait for arguments that accept single scalar …\nWhether or not the image will be accessed in combination …\nAn image combined with a sampler in a single value, …\nA 1d storage image, directly accessed, without using a …\nA 1d storage image, directly accessed without a sampler, …\nA 1d storage image, directly accessed without a sampler, …\nA 2d storage image, directly accessed, without using a …\nA 2d storage image, directly accessed without a sampler, …\nA 2d storage image, directly accessed without a sampler, …\nA 3d storage image, directly accessed, without using a …\nA 3d storage image, directly accessed without a sampler, …\nA 3d storage image, directly accessed without a sampler, …\nVulkan subpass buffer\n3D\nThe image uses arrayed content.\nIndicates that the image contains depth information.\nThe image contains multisampled content.\n2D\nIndicates that is not known ahead of time whether the …\nIndicates that it is not known ahead of time whether the …\nRepresentation not known at compile time.\nA 2-component vector of this sample type\nA 3-component vector of this sample type\nA 4-component vector of this sample type\nA write only image.\nThe image will be used with a sampler.\nFetch a single texel with a sampler set at compile time\nFetch a single texel with a sampler set at compile time\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nGathers the requested component from four texels.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nQuery the number of mipmap levels.\nQuery the mipmap level and the level of detail for a …\nQuery the number of samples available per texel fetch in a …\nQuery the dimensions of Image, with no level of detail.\nQuery the dimensions of Image, with no level of detail.\nRead a texel from an image without a sampler.\nRead a texel from an image without a sampler.\nRead a texel from subpass input attachment. Note: Vulkan …\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the sampled image with an …\nSample texels at <code>coord</code> from the image using <code>sampler</code>, after …\nSample the image based on a gradient formed by (dx, dy). …\nFetch a single texel with a sampler set at compile time …\nSample texels at <code>coord</code> from the sampled image with an …\nSample the image’s depth reference\nSample the image’s depth reference based on a gradient …\nSample the image’s depth reference based on an explicit …\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nSample the image’s depth reference with the project …\nContains extra image operands\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample texels at <code>coord</code> from the image using <code>sampler</code>.\nSample the image with a project coordinate\nSample the image with a project coordinate based on a …\nSample the image with a project coordinate by a lod\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nSample the image with a project coordinate\nWrite a texel to an image without a sampler.\nWrite a texel to an image without a sampler.\nWhether this is a <code>NoneTy</code> (when false) or a <code>SomeTy&lt;T&gt;</code> (when …\nHelper struct that denotes that the type doesn’t exist, …\nHelper trait to mimic <code>Option&lt;T&gt;</code>, but where the variant are …\nHelper struct that allows building image operands. Start …\nHelper struct that denotes that the type does exist and is …\nSets the ‘Bias’ image operand\nSets the ‘Bias’ image operand\n‘Bias’ image operand\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSets the ‘Grad’ image operand\nSets the ‘Lod’ image operand\n‘Grad’ image operand\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSets the ‘Lod’ image operand\nSets the ‘Lod’ image operand\n‘Lod’ image operand\nSets the ‘Sample’ image operand\nSets the ‘Sample’ image operand\n‘Sample’ image operandy\n…\n…\nStructure specifying an indirect dispatching command\nStructure specifying an indexed indirect drawing command\nStructure specifying an indirect drawing command\nStructure specifying a mesh tasks draw indirect command\nStructure specifying the parameters of an indirect trace …\nStructure specifying the parameters of an indirect ray …\ncallableShaderBindingTableAddress is a <code>VkDeviceAddress</code> of …\ncallableShaderBindingTableSize is a <code>VkDeviceSize</code> number of …\ncallableShaderBindingTableStride is a <code>VkDeviceSize</code> number …\ndepth is depth of the ray trace query dimensions.\ndepth is depth of the ray trace query dimensions.\nfirstIndex is the base index within the index buffer.\nfirstInstance is the instance ID of the first instance to …\nfirstInstance is the instance ID of the first instance to …\nfirstVertex is the index of the first vertex to draw.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\ngroupCountX is the number of local workgroups to dispatch …\ngroupCountY is the number of local workgroups to dispatch …\ngroupCountZ is the number of local workgroups to dispatch …\nheight is height of the ray trace query dimensions.\nheight is height of the ray trace query dimensions.\nhitShaderBindingTableAddress is a <code>VkDeviceAddress</code> of the …\nhitShaderBindingTableSize is a <code>VkDeviceSize</code> number of …\nhitShaderBindingTableStride is a <code>VkDeviceSize</code> number of …\nindexCount is the number of vertices to draw.\ninstanceCount is the number of instances to draw.\ninstanceCount is the number of instances to draw.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nmissShaderBindingTableAddress is a <code>VkDeviceAddress</code> of the …\nmissShaderBindingTableSize is a <code>VkDeviceSize</code> number of …\nmissShaderBindingTableStride is a <code>VkDeviceSize</code> number of …\nraygenShaderRecordAddress is a <code>VkDeviceAddress</code> of the ray …\nraygenShaderRecordSize is a <code>VkDeviceSize</code> number of bytes …\nvertexCount is the number of vertices to draw.\nvertexOffset is the value added to the vertex index before …\nwidth is the width of the ray trace query dimensions.\nwidth is the width of the ray trace query dimensions.\nx is the number of local workgroups to dispatch in the X …\ny is the number of local workgroups to dispatch in the Y …\nz is the number of local workgroups to dispatch in the Z …\nAbstract trait representing any SPIR-V integer type.\nIf the integer is signed: true means signed, false means …\nA trait for being generic over signed integer types.\nA trait for being generic over unsigned integer types.\nWidth of the integer, in bits.\nOn an atomic instruction, orders memory operations …\nHas the properties of both <code>Self::ACQUIRE</code> and <code>Self::RELEASE</code> …\nApply the memory-ordering constraints to […\nApply the memory-ordering constraints to […\nCrosses multiple devices.\nThe current device.\nApply the memory-ordering constraints to image contents …\nThe current invocation.\nPerform an availability operation on all references in the …\nPerform a visibility operation on all references in the …\nNo memory semantics.\nApply the memory-ordering constraints to the […\nThe current queue family.\nOn an atomic instruction, orders memory operations …\nAll observers see this memory access in the same order …\nApply the memory-ordering constraints to subgroup memory.\nSpecification for how large of a scope some instructions …\nMemory semantics to determine how some operations should …\nThe current subgroup.\nApply the memory-ordering constraints to […\nThis access cannot be eliminated, duplicated, or combined …\nApply the memory-ordering constraints to […\nThe current workgroup.\nReturns the set containing all flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nReturns the complement of this set of flags.\nRemoves the specified flags in-place.\nInserts or removes the specified flags depending on the …\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nAbstract trait representing a SPIR-V integer or …\nA potential intersection with an axis-aligned bounding box …\nAn acceleration structure type which is an opaque …\nDo not intersect with the back face of triangles.\nDo not intersect with the front face of triangles.\nDo not intersect with non-opaque geometry.\nDo not intersect with opaque geometry.\nDescribes the type of the intersection which is currently …\nDescribes the type of the intersection currently committed …\nA user-generated intersection has been committed.\nNo flags specified.\nForce all intersections with the trace to be non-opaque.\nNo intersection is committed.\nForce all intersections with the trace to be opaque.\nFlags controlling the properties of an OpTraceRayKHR …\nA ray query type which is an opaque object representing a …\nDo not intersect with any AABB (Axis Aligned Bounding Box) …\nDo not execute a closest hit shader.\nDo not intersect with any triangle geometries.\nAccept the first hit discovered.\nA potential intersection with a triangle is being …\nAn intersection with a triangle has been committed.\nReturns the set containing all flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nReturns the complement of this set of flags.\nConfirms a triangle intersection to be included in the …\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nConverts a 64-bit integer into an <code>AccelerationStructure</code>.\nConverts a vector of two 32 bit integers into an …\nGets the second and third barycentric coordinates of the …\nReturns whether the current intersection considered in a …\nGets the geometry index for the current intersection …\nGets the custom index of the instance for the current …\nGets the id of the instance for the current intersection …\nGets the object-space ray direction for the current …\nGets the object-space ray origin for the current …\nGets a matrix that transforms values to world-space from …\nGets the primitive index for the current intersection …\nGets the shader binding table record offset for the …\nGets the “T” value for the current or previous …\nReturns the type of the current candidate intersection.\nGets the second and third barycentric coordinates of the …\nReturns whether the current intersection considered in a …\nGets the geometry index for the current intersection …\nGets the custom index of the instance for the current …\nGets the id of the instance for the current intersection …\nGets the object-space ray direction for the current …\nGets the object-space ray origin for the current …\nGets a matrix that transforms values to world-space from …\nGets the primitive index for the current intersection …\nGets the shader binding table record offset for the …\nGets the “T” value for the current or previous …\nReturns the type of the current candidate intersection.\nReturns whether a candidate intersection considered in a …\nReturns the “Ray Flags” value used by the ray query.\nReturns the “Ray Tmin” value used by the ray query.\nGets the world-space direction for the ray traced in a ray …\nGets the world-space origin for the ray traced in a ray …\nInitialize a ray query object, defining parameters of …\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nReturns the complement of this set of flags.\nAllow traversal to proceed. Returns <code>true</code> if traversal is …\nRemoves the specified flags in-place.\nInserts or removes the specified flags depending on the …\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nTerminates further execution of a ray query; further calls …\nToggles the specified flags in-place.\nTrace a ray into the acceleration structure.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nAbstract trait representing a SPIR-V scalar type.\nThe dimension of the vector, or 1 if it is a scalar\nEither the scalar component type of the vector or the …\nAbstract trait representing a SPIR-V vector type.\nAbstract trait representing either a vector or a scalar …\nTrait that implements slicing of a vector into a scalar or …\nSlices the vector into a lower dimensional type by …")