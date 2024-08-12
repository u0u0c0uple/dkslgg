package com.dkslgg.record.model.dto.response;

import com.dkslgg.record.model.vo.ParticipantItemVo;
import com.dkslgg.record.model.vo.ParticipantVo;
import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RegexPattern;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Slf4j
public record ParticipantResponseDto(
        String gameName,
        String tagLine,
        int champId,
        int champLevel,
        int kill,
        int death,
        int assist,
        int teamId,
        List<int[]> itemList
) {
    public static ParticipantResponseDto from(ParticipantVo participantVo){
        List<int[]> items = new ArrayList<>();
        for(ParticipantItemVo item : participantVo.getItemList()) items.add(new int[]{item.getItemOrder(), item.getItemId()});
        return new ParticipantResponseDto(
                participantVo.getAccount().getGameName(),
                participantVo.getAccount().getTagLine(),
                participantVo.getChampId(),
                participantVo.getChampLevel(),
                participantVo.getKill(),
                participantVo.getDeath(),
                participantVo.getAssist(),
                participantVo.getTeamId(),
                items);
    }

    @Builder
    public ParticipantResponseDto(String gameName, String tagLine, int champId, int champLevel, int kill, int death, int assist, int teamId, List<int[]> itemList) {
        /* 유효성 검사 */
        boolean flag = false;
        if (gameName == null || gameName.length() < 2 || 16 < gameName.length()) {
            log.error("닉네임 유효하지 않음: {}", gameName);
            flag = true;
        }
        if (tagLine == null || tagLine.length() < 3 || 5 < tagLine.length()) {
            log.error("닉네임 태그 유효하지 않음: {}", tagLine);
            flag = true;
        } if(champId < 0) {
            log.error("챔피언 아이디 유효하지 않음: {}", champId);
            flag = true;
        } if(champLevel < 1 || 18 < champLevel) {
            log.error("챔피언 레벨 유효하지 않음: {}", champLevel);
            flag = true;
        } if(kill < 0 || death < 0 || assist < 0) {
            log.error("KDA 유효하지 않음: {}/{}/{}", kill, death, assist);
            flag = true;
        } if(teamId != 100 && teamId != 200) {
            log.error("팀 아이디 유효하지 않음: {}", teamId);
            flag = true;
        } if(itemList == null) {
            log.error("아이템 리스트 유효하지 않음: {}", itemList);
            flag = true;
        }

        if(flag) {
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }

        this.gameName = gameName;
        this.tagLine = tagLine;
        this.champId = champId;
        this.champLevel = champLevel;
        this.kill = kill;
        this.death = death;
        this.assist = assist;
        this.teamId = teamId;
        this.itemList = itemList;
    }
}
