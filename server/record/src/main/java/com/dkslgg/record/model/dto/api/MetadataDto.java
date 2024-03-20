package com.dkslgg.record.model.dto.api;

import java.util.List;

public record MetadataDto(
        String dataVersion,
        String matchId,
        List<String> participants
) {
}
